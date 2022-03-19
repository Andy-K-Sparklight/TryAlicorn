import {
  closeFile,
  isFileExist,
  openFile,
  writeFile,
} from "../../impl/ClicornAPI";
import { pathBasename, pathJoin } from "../../impl/Path";
import { PLACE_HOLDER } from "../commons/Constants";
import { MinecraftContainer } from "./MinecraftContainer";
const ASC_NAME = "asc.lock";
// Use symlink
export async function isSharedContainer(
  container: MinecraftContainer
): Promise<boolean> {
  return await isFileExist(container.resolvePath(ASC_NAME));
}

export async function markASC(dir: string): Promise<void> {
  const f = await openFile(pathJoin(dir, ASC_NAME), "w");
  await writeFile(f, Buffer.from(PLACE_HOLDER));
  await closeFile(f);
}

const STANDALONE_FILE = /forge|client|fabric/i;
const STANDALONE_PATH = /net[/\\](minecraft(forge)?|fabricmc)/i;
export function needsStandalone(pt: string): boolean {
  return STANDALONE_FILE.test(pathBasename(pt)) || STANDALONE_PATH.test(pt);
}
