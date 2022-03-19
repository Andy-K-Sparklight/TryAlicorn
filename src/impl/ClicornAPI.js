// Self Init
export async function initClicornAPI() {
  window._USER_HOME = "/home/rarity";
  window._OS_TYPE = "Linux";
  window.Buffer = require("buffer/").Buffer;
}

// Dev
export function print(msg) {}

const fdMap = new Map();
let fd = 0;

// File System
export function openFile(path) {
  fdMap.set(fd, path);
  return fd++;
}
export function closeFile(fd) {
  return fdMap.delete(fd);
}
export function getFileSize(fd) {
  return (localStorage.getItem(fdMap.get(fd)) || "").length;
}
export async function readFile(fd) {
  const d = localStorage.getItem(fdMap.get(fd)) || "";
  return Buffer.from(d);
}
export function writeFile(fd, data) {
  localStorage.setItem(fdMap.get(fd), data.toString());
}
export function appendFile(fd, data) {
  let f = fdMap.get(fd);
  let ori = localStorage.getItem(f);
  localStorage.setItem(f, ori + data.toString());
}
export function getUserHome() {
  return "/home/rarity";
}
export function ensureDir() {
  return Promise.resolve();
}
export function unZip() {
  return Promise.reject(); // Impossible
}
export function isFileExist(pt) {
  return localStorage.getItem(pt) !== null;
}
export function readDirectory(pt) {
  let o = [];
  for (let i = 0; i < localStorage.length; i++) {
    let k = localStorage.key(i);
    console.log(k);
    console.log(pt);
    if (k.startsWith(pt)) {
      let ll = k.split(pt)[1].split("/")[1];
      if (!o.includes(ll)) {
        o.push(ll);
      }
    }
  }
  return Promise.resolve(o);
}
export function remove(pt) {
  localStorage.removeItem(pt);
}
export function getModificationTime(pt) {
  return Promise.resolve(new Date());
}
export function linkFile(o, t) {
  return Promise.reject();
}
export function getSHA1(pt) {
  return "";
}
// App
export function resize(w, h) {
  return;
}
export function openExternal(s) {
  open(s);
}

// Os
export function getOsType() {
  return "Linux";
}

export function spawnProc(cmd) {
  return 0;
}

export function getFreeMemory() {
  return 12028940;
}
export function getTotalMemory() {
  return 16265812;
}
export function chdir(pt) {
  return;
}

// Net
export async function downloadFile(url, pt, timeout) {
  return true;
}

export async function netGet(url, hd, timeout) {
  return { status: 500, body: Buffer.alloc(0) };
}
export async function netPost(url, hd, bd, timeout) {
  return { status: 500, body: Buffer.alloc(0) };
}
