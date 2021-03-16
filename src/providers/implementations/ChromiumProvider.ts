import puppeteer, { Page } from 'puppeteer';

export class ChromiumProvider {
  private page: Page;

  private async getPage() {
    if (this.page) {
      return this.page;
    }
  
    const browser = await puppeteer.launch({
      headless: true
    });
  
    const page = await browser.newPage();
  
    this.page = page;
  
    return this.page;
  }

  public async getScreenshot(html: string) {
    const page = await this.getPage();

    await page.setViewport({
      width: 1200,
      height: 630
    });
    await page.setContent(html);
  
    const file = await page.screenshot({
      type: 'png'
    });
  
    return file;
  }
}