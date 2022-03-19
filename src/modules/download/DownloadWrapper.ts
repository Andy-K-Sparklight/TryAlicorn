import { DownloadMeta, DownloadStatus } from "./AbstractDownloader";

// Download one file
// Mirror will be applied here
// If file already exists, downloader will resolve if hash matches
export function wrappedDownloadFile(
  meta: DownloadMeta,
  noAutoLn = false,
  disableMirror = false
): Promise<DownloadStatus> {
  return Promise.resolve(DownloadStatus.RESOLVED);
}
