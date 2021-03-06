import { netGet, readDirectory, remove } from "../../impl/ClicornAPI";
import { pathJoin } from "../../impl/Path";
import { uniqueHash } from "../commons/BasicHash";
import { Pair } from "../commons/Collections";
import { ALICORN_ENCRYPTED_DATA_SUFFIX } from "../commons/Constants";
import { getActualDataPath, loadData, saveData } from "../config/DataSupport";
import { decrypt2, decryptByMachine, encrypt2 } from "../security/Encrypt";
import { Account } from "./Account";
import { AuthlibAccount, getSkinByUUID } from "./AuthlibAccount";
import { LocalAccount } from "./LocalAccount";
import { MicrosoftAccount } from "./MicrosoftAccount";
import { getMojangSkinByUUID, MojangAccount } from "./MojangAccount";

// Account Prefix
// DO NOT EDIT THIS - VALUES ARE VERY ESSENTIAL
// $AL! Alicorn Local Account
// $MZ! Microsoft Account
// $BJ! Mojang Account
// $AJ! Authlib Injector
enum AccountType {
  MICROSOFT = "$MZ!",
  ALICORN = "$AL!",
  AUTHLIB_INJECTOR = "$AJ!",
  MOJANG = "$BJ!",
}

const ACCOUNT_ROOT = "accounts";

export { AccountType };

export async function saveAccount(a: Account): Promise<boolean> {
  try {
    const fName = a.getAccountIdentifier() + ALICORN_ENCRYPTED_DATA_SUFFIX;
    await saveData(
      pathJoin(ACCOUNT_ROOT, fName),
      encrypt2(decideWhichAccountByCls(a) + a.serialize())
    );
    await reloadAccounts();
    return true;
  } catch {
    return false;
  }
}

export async function getAllAccounts(): Promise<string[]> {
  try {
    return await readDirectory(getActualDataPath(ACCOUNT_ROOT));
  } catch {
    return [];
  }
}

export async function loadAccount(fName: string): Promise<Account | null> {
  try {
    const s = await loadData(pathJoin(ACCOUNT_ROOT, fName));
    const deSOld = decryptByMachine(s);
    const deSNew = decrypt2(s);
    const deS = deSNew.startsWith("$") ? deSNew : deSOld;
    const p = decideWhichAccountByHead(deS);
    switch (p.getFirstValue()) {
      case AccountType.AUTHLIB_INJECTOR:
        return loadAJAccount(p.getSecondValue());
      case AccountType.MOJANG:
        return loadMJAccount(p.getSecondValue());
      case AccountType.MICROSOFT:
        return loadMSAccount(p.getSecondValue());
      case AccountType.ALICORN:
      default:
        return loadLocalAccount(p.getSecondValue());
    }
  } catch {
    return null;
  }
}

function loadLocalAccount(obj: Record<string, unknown>): LocalAccount {
  const la = new LocalAccount(String(obj["accountName"] || ""));
  la.lastUsedUsername = String(obj["lastUsedUsername"] || "");
  la.lastUsedAccessToken = String(obj["lastUsedAccessToken"] || "");
  la.lastUsedUUID = String(obj["lastUsedUUID"] || "");
  return la;
}

function loadAJAccount(obj: Record<string, unknown>): AuthlibAccount {
  const la = new AuthlibAccount(
    String(obj["accountName"] || ""),
    String(obj["authServer"] || "")
  );
  la.lastUsedUsername = String(obj["lastUsedUsername"] || "");
  la.lastUsedAccessToken = String(obj["lastUsedAccessToken"] || "");
  la.lastUsedUUID = String(obj["lastUsedUUID"] || "");
  return la;
}

function loadMJAccount(obj: Record<string, unknown>): MojangAccount {
  const la = new MojangAccount(String(obj["accountName"] || ""));
  la.lastUsedUsername = String(obj["lastUsedUsername"] || "");
  la.lastUsedAccessToken = String(obj["lastUsedAccessToken"] || "");
  la.lastUsedUUID = String(obj["lastUsedUUID"] || "");
  return la;
}

function loadMSAccount(obj: Record<string, unknown>): MicrosoftAccount {
  const la = new MicrosoftAccount(String(obj["accountName"] || ""));
  la.lastUsedUsername = String(obj["lastUsedUsername"] || "");
  la.lastUsedAccessToken = String(obj["lastUsedAccessToken"] || "");
  la.lastUsedUUID = String(obj["lastUsedUUID"] || "");
  la.refreshToken = String(obj["refreshToken"] || "");
  la.lastUsedXuid = String(obj["lastUsedXuid"] || "");
  return la;
}

function decideWhichAccountByCls(a: Account): AccountType {
  if (a instanceof AuthlibAccount) {
    return AccountType.AUTHLIB_INJECTOR;
  }
  if (a instanceof MojangAccount) {
    return AccountType.MOJANG;
  }
  if (a instanceof MicrosoftAccount) {
    return AccountType.MICROSOFT;
  }
  return AccountType.ALICORN;
}

function decideWhichAccountByHead(
  str: string
): Pair<AccountType, Record<string, unknown>> {
  try {
    let p1;
    const p2 = JSON.parse(str.slice(4));
    switch (str.slice(0, 4)) {
      case AccountType.MICROSOFT:
        p1 = AccountType.MICROSOFT;
        break;
      case AccountType.MOJANG:
        p1 = AccountType.MOJANG;
        break;
      case AccountType.AUTHLIB_INJECTOR:
        p1 = AccountType.AUTHLIB_INJECTOR;
        break;
      case AccountType.ALICORN:
      default:
        p1 = AccountType.ALICORN;
        break;
    }
    return new Pair<AccountType, Record<string, unknown>>(p1, p2);
  } catch {
    return new Pair<AccountType, Record<string, unknown>>(
      AccountType.ALICORN,
      {}
    );
  }
}

export async function removeAccount(fName: string): Promise<void> {
  try {
    await remove(getActualDataPath(pathJoin(ACCOUNT_ROOT, fName)));
  } catch {}
}

export function copyAccount(aIn: Account | undefined): Account {
  if (aIn === undefined) {
    return new LocalAccount("Player");
  }
  switch (aIn.type) {
    case AccountType.MICROSOFT:
      return new MicrosoftAccount(aIn.accountName);
    case AccountType.MOJANG: {
      const ac = new MojangAccount(aIn.accountName);
      const ai = aIn as MojangAccount;
      ac.availableProfiles = ai.availableProfiles;
      ac.accountName = ai.accountName;
      ac.lastUsedUUID = ai.lastUsedUUID;
      ac.lastUsedAccessToken = ai.lastUsedAccessToken;
      ac.lastUsedUsername = ai.lastUsedUsername;
      ac.selectedProfile = ai.selectedProfile;
      return ac;
    }
    case AccountType.AUTHLIB_INJECTOR: {
      const ai = aIn as AuthlibAccount;
      const ac = new AuthlibAccount(aIn.accountName, ai.authServer);
      ac.availableProfiles = ai.availableProfiles;
      ac.accountName = ai.accountName;
      ac.lastUsedUUID = ai.lastUsedUUID;
      ac.lastUsedAccessToken = ai.lastUsedAccessToken;
      ac.lastUsedUsername = ai.lastUsedUsername;
      ac.selectedProfile = ai.selectedProfile;
      return ac;
    }
    case AccountType.ALICORN:
    default:
      return new LocalAccount(aIn.accountName);
  }
}

let ACCOUNT_SET: Set<Account> = new Set();

export async function reloadAccounts(): Promise<void> {
  try {
    const a = await getAllAccounts();
    const builtAccount: Set<Account> = new Set<Account>();
    for (const accountFile of a) {
      const r = await loadAccount(accountFile);
      if (r) {
        builtAccount.add(r);
      }
    }
    ACCOUNT_SET = builtAccount;
  } catch {}
}
export function getPresentAccounts(): Set<Account> {
  return ACCOUNT_SET;
}

const ACCOUNT_SKIN_MAP: Map<string, string> = new Map();
const ACCOUNT_SKIN_DATA_MAP: Map<string, string> = new Map();

export function querySkinFor(a: Account): Promise<string> {
  if (a.lastUsedUUID.trim().length === 0) {
    return Promise.resolve("");
  }
  const key = decideWhichAccountByCls(a) + a.getAccountIdentifier();

  return new Promise<string>((res) => {
    void (async () => {
      try {
        if (ACCOUNT_SKIN_DATA_MAP.has(key)) {
          res(ACCOUNT_SKIN_DATA_MAP.get(key) as string); // API level cache
          return;
        }
        let resolved = false;
        const t = await loadCachedSkin(key);

        if (t) {
          resolved = true;
          res(t); // First resolve
          ACCOUNT_SKIN_DATA_MAP.set(key, t);
        }
        let u = "";
        if (ACCOUNT_SKIN_MAP.has(key)) {
          // Cache at profile level
          u = ACCOUNT_SKIN_MAP.get(key) as string;
        } else if (a instanceof AuthlibAccount) {
          u = await getSkinByUUID(a as AuthlibAccount);
        } else if (
          a instanceof MojangAccount ||
          a instanceof MicrosoftAccount
        ) {
          u = await getMojangSkinByUUID(a);
        } else if (a instanceof LocalAccount) {
          res(""); // It's not possible
        }
        ACCOUNT_SKIN_MAP.set(key, u);
        if (!resolved) {
          res(u);
        }
        void cacheSkin(key, u); // Non-blocking
      } catch (e) {
        console.log(e);
      }
    })();
  });
}
async function cacheSkin(key: string, u: string): Promise<void> {
  try {
    const res = await netGet(u, "{}", 0);
    if (res.status < 200 || res.status >= 300) {
      return;
    }
    const s = res.body.toString("base64");
    ACCOUNT_SKIN_DATA_MAP.set(key, "data:image/png;base64," + s);
    await saveData("skincache/" + uniqueHash(key) + ".skincache", s);
  } catch {}
}

async function loadCachedSkin(key: string): Promise<string> {
  try {
    const d = await loadData("skincache/" + uniqueHash(key) + ".skincache");
    if (d) {
      return "data:image/png;base64," + d;
    }
    return "";
  } catch {
    return "";
  }
}
