import {
  AbstractDownloader,
  DownloadMeta,
  DownloadStatus,
} from "./AbstractDownloader";

export class Serial extends AbstractDownloader {
  private static instance = new Serial();

  static getInstance(): Serial {
    return Serial.instance;
  }

  downloadFile(
    meta: DownloadMeta,
    noTimeout?: boolean,
    fetchRequire = false
  ): Promise<DownloadStatus> {
    return Promise.resolve(DownloadStatus.RESOLVED);
  }
}
