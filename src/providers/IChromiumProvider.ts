export interface IChromiumProvider {
  getScreenshot: (html: string) => Promise<string | void | Buffer>;
}