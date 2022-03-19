import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import pkg from "../../package.json";
import { initClicornAPI, openExternal } from "../impl/ClicornAPI";
import { initFiles } from "../impl/Files";
import { initPaths, pathIsAbsolute } from "../impl/Path";
import {
  ensureDataDir,
  getNumber,
  getString,
  initConfigPaths,
  loadConfig,
} from "../modules/config/ConfigSupport";
import { initDataPaths } from "../modules/config/DataSupport";
import { loadGDT } from "../modules/container/ContainerUtil";
import { initJavaInfo, loadJDT } from "../modules/java/JavaInfo";
import { App } from "./App";
import { submitError, submitWarn } from "./Message";
import { AL_THEMES } from "./ThemeColors";
import { initTranslator, tr } from "./Translator";

async function veryInit() {
  initFiles();
  await initPaths();
  await initClicornAPI();
  initConfigPaths();
  initDataPaths();
  initJavaInfo();
}

window.onload = async () => {
  try {
    console.log("Renderer first log.");
    console.log("Configuring essential modules...");
    await veryInit();
    console.log("Configuring window...");

    const t0 = new Date();
    printScreen("Setting up error pop system...");
    window.addEventListener("unhandledrejection", (e) => {
      submitError("ERR! " + e.reason);
      console.log(e);
      printScreen(e.reason);
      showLogs();
      window.dispatchEvent(new CustomEvent("sysError", { detail: e.reason }));
    });

    window.addEventListener("error", (e) => {
      submitError("ERR! " + e.message);
      console.log(e);
      printScreen(e.message);
      showLogs();
      window.dispatchEvent(new CustomEvent("sysError", { detail: e.message }));
    });
    const e1 = document.getElementById("boot_1");
    if (e1) {
      e1.innerHTML = e1.innerHTML + "Done.";
    }
    printScreen("Log system enabled.");
    console.log(`Alicorn ${pkg.appVersion} Renderer Process`);
    console.log("%c❤ From Annie K Rarity Sparklight", "color:#df307f;");
    console.log(
      "%cSparklight is a girl - a filly, to be accurate.",
      "color:#df307f;"
    );
    console.log("Life is better if you stay away from 'slime-liked' Forge.");
    console.log(
      "%cStay with Fabric, stay with performance.",
      "font-weight:bold;"
    );
    console.log("%cDedicated to Linus Torvalds and FSF.", "font-weight:bold;");
    console.log(
      "Alicorn Launcher Copyright (C) 2021-2022 Annie K Rarity Sparklight"
    );
    console.log(
      "This program comes with ABSOLUTELY NO WARRANTY; for details, please see 'resources/app/LICENSE'."
    );
    console.log(
      "This is free software, and you are welcome to redistribute it under certain conditions; see the license file for details."
    );
    printScreen("Pre init works done, running main tasks.");
    const e2 = document.getElementById("boot_2");
    if (e2) {
      e2.innerHTML = e2.innerHTML + "Done.";
    }
    void (async () => {
      printScreen("Loading lang, config, gdt, jdt...");
      await ensureDataDir();
      await Promise.allSettled([
        initTranslator(),
        loadConfig(),
        loadGDT(),
        loadJDT(),
      ]);
      // GDT & JDT is required by LaunchPad & JavaSelector
      printScreen("Rendering main application...");
      const e3 = document.getElementById("boot_3");
      if (e3) {
        e3.innerHTML = e3.innerHTML + "Done.";
      }
      printScreen("Flushing theme colors...");
      flushColors();
      try {
        ReactDOM.render(<RendererBootstrap />, document.getElementById("root"));
      } catch (e) {
        printScreen("ERR! " + String(e));
        throw e;
      }
      printScreen("Configuring font size...");
      configureFontSize();
      printScreen("Setting up link trigger...");
      // @ts-ignore
      window["ashow"] = (a: string) => {
        void openExternal(a);
      }; // Binding
      console.log("This Alicorn doesn't have super cow powers.");
      console.log(
        "Render complete, time elapsed: " +
          (new Date().getTime() - t0.getTime()) / 1000 +
          "s."
      );
      console.log("Initializing modules...");
      const t1 = new Date();
      const t2 = new Date();
      console.log(
        "Delayed init tasks finished. Time elapsed: " +
          (t2.getTime() - t1.getTime()) / 1000 +
          "s."
      );
      console.log(
        "%c" + tr("System.DevToolsWarn1"),
        "font-size:3.5rem;color:royalblue;font-weight:900;"
      );
      console.log(
        "%c" + tr("System.DevToolsWarn2"),
        "font-size:1rem;color:red;"
      );
      console.log(
        "%c" + tr("System.DevToolsWarn3"),
        "font-size:2rem;color:red;"
      );
      // Deferred Check
      if (!navigator.onLine) {
        submitWarn(tr("System.Offline"));
      }
      // Optional services
      const t3 = new Date();
      console.log("Running optional services...");
      const t4 = new Date();
      console.log(
        "Optional services finished. Time elapsed: " +
          (t4.getTime() - t3.getTime()) / 1000 +
          "s."
      );
    })();
  } catch (e) {
    alert(e);
  }
};

function configureFontSize(): void {
  const f = "0.875rem";
  let e: HTMLStyleElement | null = document.createElement("style");
  e.innerText = `.smtxt{font-size:${f} !important;}`;
  document.head.insertAdjacentElement("beforeend", e);
  e = null;
}

function printScreen(msg: string): void {}

function showLogs(): void {}
function getTheme() {
  const selected = getString("theme");
  let t;
  if (AL_THEMES[selected] !== undefined) {
    t = AL_THEMES[selected];
  } else {
    t = AL_THEMES[tr("PrefTheme")];
  }
  return t;
}

export function isBgDark(): boolean {
  const selected = getString("theme");
  let t;
  if (AL_THEMES[selected] !== undefined) {
    t = selected;
  } else {
    t = tr("PrefTheme");
  }
  return t.includes("Dark");
}

function flushColors(): void {
  const t = getTheme();
  setThemeParams(
    getString("theme.primary.main") || "#" + t[0],
    getString("theme.primary.light") || "#" + t[1],
    getString("theme.secondary.main") || "#" + t[2],
    getString("theme.secondary.light") || "#" + t[3],
    FONT_FAMILY
  );
  let e: HTMLStyleElement | null = document.createElement("style");
  e.innerText =
    `html {background-color:${
      getString("theme.secondary.light") || "#" + getTheme()[3]
    }; font-family:${FONT_FAMILY};} a {color:${
      getString("theme.primary.main") || "#" + getTheme()[0]
    } !important;} ` +
    (isBgDark()
      ? `input, label {color:${
          getString("theme.primary.main") || "#" + getTheme()[0]
        } !important;} fieldset {border-color:${
          getString("theme.primary.main") || "#" + getTheme()[0]
        } !important;} div[role="radiogroup"] > label > span > span > div > svg, input[type="checkbox"] + svg, .MuiFormControlLabel-label .MuiInputBase-input {color: ${
          getString("theme.primary.main") || "#" + getTheme()[0]
        } !important;}`
      : "");
  document.head.insertAdjacentElement("beforeend", e);
  e = null;
  window.dispatchEvent(new CustomEvent("ForceRefreshApp"));
}

const FONT_FAMILY =
  '"Ubuntu Mono", Consolas, "Courier New", Courier, "Source Hans Sans", "Roboto Medium", "Microsoft YaHei", "Segoe UI", SimHei, Tahoma, Geneva, Verdana, sans-serif';

function setThemeParams(
  primaryMain: string,
  primaryLight: string,
  secondaryMain: string,
  secondaryLight: string,
  fontFamily: string
): void {
  ALICORN_DEFAULT_THEME_LIGHT = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: primaryMain,
        light: primaryLight,
      },
      secondary: {
        main: secondaryMain,
        light: secondaryLight,
      },
    },
    typography: {
      fontFamily: fontFamily,
      fontSize: 14,
    },
  });
  ALICORN_DEFAULT_THEME_DARK = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: primaryMain,
        light: primaryLight,
      },
      secondary: {
        main: secondaryMain,
        light: secondaryLight,
      },
    },
    typography: {
      fontFamily: fontFamily,
      fontSize: 14,
    },
  });
}

export let ALICORN_DEFAULT_THEME_DARK: Theme;
export let ALICORN_DEFAULT_THEME_LIGHT: Theme;

const BACKGROUND_URLS: Record<string, string> = {
  ACG: "https://api.ixiaowai.cn/api/api.php",
  Bing: "https://api.oick.cn/bing/api.php",
  Disabled: "",
  "": "",
};
function RendererBootstrap(): JSX.Element {
  let url =
    getString("theme.background.custom") || getString("theme.background");
  if (url === "Disabled" || !url) {
    url = "";
  } else {
    url = BACKGROUND_URLS[url] || url;
    if (pathIsAbsolute(url)) {
      url = "file://" + url;
    }
  }
  return (
    <Box
      style={{
        userSelect: "none",
        backgroundColor:
          getString("theme.secondary.light") || "#" + getTheme()[3],
      }}
    >
      <ThemeProvider theme={ALICORN_DEFAULT_THEME_DARK}>
        <HashRouter>
          <App />
        </HashRouter>
        {getString("theme") === "Random" ? (
          <Typography
            sx={{
              pointerEvents: "none",
              position: "fixed",
              left: "0.3125rem",
              bottom: "0.3125rem",
            }}
            color={"textPrimary"}
          >
            {AL_THEMES["Random"].join(",")}
          </Typography>
        ) : (
          ""
        )}

        <Typography
          sx={{
            pointerEvents: "none",
            position: "fixed",
            right: "0.3125rem",
            bottom: "0.3125rem",
          }}
          color={"primary"}
        >
          {"Alicorn " + pkg.appVersion + " #" + pkg.updatorVersion}
        </Typography>
        <div
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            pointerEvents: "none",
            top: 0,
            bottom: 0,
            opacity: getNumber("theme.background.opacity") / 100,
            backgroundImage: url ? `url(${url || ""})` : undefined,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "transparent",
            backgroundPosition: "center",
          }}
        />
      </ThemeProvider>
    </Box>
  );
}
