import React from "react";
import { cSessionStorage } from "../impl/BrowserFix";
import {
  closeFile,
  getOsType,
  getUserHome,
  openFile,
  readFile,
} from "../impl/ClicornAPI";
import { pathBasename } from "../impl/Path";
import { getString, set } from "../modules/config/ConfigSupport";
import { getPathInDefaults } from "../modules/config/DataSupport";

export const ALL_ASSISTANTS = ["PonyCN"];

function currentLocale(): string {
  let pr = getString("assistant");
  if (pr.length === 0) {
    set("assistant", "PonyCN");
    pr = "PonyCN";
  }
  return pr;
}

const localesMap = new Map<string, Record<string, string | string[]>>();

function registryLocale(
  code: string,
  data: Record<string, string | string[]>
): void {
  localesMap.set(code, data);
}

const TEMP_CHANGE_TR_ACTION_KEY = "Translator.UseLocale";

// Main translate function
// ATTENETION! This function actually CAN return a JSX Element
// We use string here to 'cheat' TSC
export function tr(key: string, ...values: string[]): string {
  const lc = cSessionStorage.getItem(TEMP_CHANGE_TR_ACTION_KEY);
  let lang;
  if (typeof lc === "string") {
    lang = localesMap.get(lc);
  } else {
    lang = localesMap.get(currentLocale());
  }
  let res = (lang || {})[key];
  if (res === undefined) {
    const t = (lang || {})["_BaseOn"];
    if (typeof t === "string") {
      cSessionStorage.setItem(TEMP_CHANGE_TR_ACTION_KEY, t);
      const b = tr(key, ...values);
      cSessionStorage.removeItem(TEMP_CHANGE_TR_ACTION_KEY);
      return b;
    }
    res = key;
  }
  let p = String(res);
  if (p.startsWith("@HTML")) {
    p = p.slice(5);
    // Cheat TSC
    return React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: applyEnvironmentVars(applyCustomVars(p, values)),
      },
    }) as unknown as string;
  }
  return applyEnvironmentVars(applyCustomVars(p, values));
}

export function randsl(key: string, ...values: string[]): string {
  const lc = cSessionStorage.getItem(TEMP_CHANGE_TR_ACTION_KEY);
  let lang;
  if (typeof lc === "string") {
    lang = localesMap.get(lc);
  } else {
    lang = localesMap.get(currentLocale());
  }
  const res = (lang || {})[key];
  if (typeof res === "string") {
    return res;
  }
  if (typeof res === "undefined") {
    const t = (lang || {})["_BaseOn"];
    if (typeof t === "string") {
      cSessionStorage.setItem(TEMP_CHANGE_TR_ACTION_KEY, t);
      const b = randsl(key, ...values);
      cSessionStorage.removeItem(TEMP_CHANGE_TR_ACTION_KEY);
      return b;
    }
    return key;
  }
  if (res.length === 0) {
    return key;
  }
  const trimmed = trimControlCode(res, values);
  return trimmed[Math.floor(Math.random() * trimmed.length)];
}

export async function initTranslator(): Promise<void> {
  await Promise.allSettled(
    ALL_ASSISTANTS.map(async (a) => {
      registryLocale(a, await buildLocale(a));
    })
  );
}

async function buildLocale(
  name: string
): Promise<Record<string, string | string[]>> {
  try {
    const fd = await openFile(getPathInDefaults(name + ".lang"), "r");
    let f = (await readFile(fd)).toString();
    await closeFile(fd);
    f = f.replaceAll("\\\n", "");
    const a = f.split("\n");
    const b: string[] = [];
    for (const l1 of a) {
      const s = l1.trim();
      if (s.length > 0) {
        if (s === "@empty") {
          b.push("");
        } else {
          b.push(s);
        }
      }
    }
    const out: Record<string, string | string[]> = {};
    const fullLength = b.length;
    let cursor = 0;
    let buff: string[] = [];
    let ctitle = "";
    while (cursor < fullLength) {
      const cline = b[cursor];
      if (cline.startsWith("#")) {
        // Clean prev buffer
        if (ctitle.length > 0) {
          if (buff.length === 1) {
            out[ctitle] = buff[0];
          } else if (buff.length >= 2) {
            out[ctitle] = buff;
          }
        }
        ctitle = cline.slice(1).trim();
        buff = [];
      } else {
        buff.push(cline.trim().replaceAll("\\n", "\n"));
      }
      cursor++;
    }
    if (ctitle.length > 0) {
      if (buff.length === 1) {
        out[ctitle] = buff[0];
      } else if (buff.length >= 2) {
        out[ctitle] = buff;
      }
    }
    return out;
  } catch (e) {
    console.log(e);
    return {};
  }
}
// {Config:key.key} returns the config
function applyEnvironmentVars(strIn: string): string {
  if (!strIn.includes("{") || !strIn.includes("}")) {
    if (!strIn.startsWith("{}")) {
      return strIn; // Then will not apply
    }
  }
  let primary = strIn
    .replaceAll("{Date}", new Date().toLocaleDateString())
    .replaceAll(
      "{UserName}",
      getString("user.name") || pathBasename(getUserHome())
    )
    .replaceAll("{Platform}", getOsType())
    .replaceAll("{}", "");

  const extractRegex = /\{Config:.*?(?=})/g;
  const allConfig = primary.match(extractRegex);
  if (allConfig) {
    allConfig.forEach((cKey) => {
      cKey = cKey.slice(8);
      primary = primary.replaceAll(`{Config:${cKey}}`, getString(cKey));
    });
  }
  return primary;
}

function applyCustomVars(origin: string, rules: string[]): string {
  const rulesMap = rules.map((r) => {
    const s = r.split("=");
    return [s.shift(), s.join("=")];
  });
  let cStr = origin;
  for (const p of rulesMap) {
    if (p[0]) {
      try {
        cStr = cStr.replace(new RegExp(`{${p[0]}}`, "g"), p[1] || "");
      } catch {}
    }
  }
  return cStr;
}

// Randsl control
// Replace first
// [JavaScript Code] means only add this to choices if JS result is true
const CONTROL_CODE_REGEX = /\[.*?(?=].*)/g;

function trimControlCode(origin: string[], rules: string[]): string[] {
  const output: string[] = [];
  origin.forEach((v) => {
    let tr = applyEnvironmentVars(applyCustomVars(v, rules));
    const controlCode = tr.match(CONTROL_CODE_REGEX);
    if (controlCode && controlCode[0]) {
      try {
        const r = eval(controlCode[0].slice(1));
        if (r) {
          const a = tr.split("]");
          a.shift();
          let s = a.join("]");
          if (s.startsWith("@HTML")) {
            s = s.slice(5);
            output.push(
              React.createElement("span", {
                dangerouslySetInnerHTML: { __html: s },
              }) as unknown as string
            );
            return;
          }
          output.push(s);
        }
      } catch {
        // If error then we won't add this
      }
    } else {
      if (tr.startsWith("@HTML")) {
        tr = tr.slice(5);
        output.push(
          React.createElement("span", {
            dangerouslySetInnerHTML: { __html: tr },
          }) as unknown as string
        );
        return;
      }
      output.push(tr);
    }
  });
  return output;
}
