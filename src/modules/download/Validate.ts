import { closeFile, getFileSize, openFile } from "../../impl/ClicornAPI";

async function sizeValidate(f: string, size: number): Promise<boolean> {
  if (size <= 0) {
    return true;
  }
  try {
    const fd = await openFile(f, "rb");
    const s = await getFileSize(fd);
    await closeFile(fd);
    return s === size;
  } catch {
    return false;
  }
}
