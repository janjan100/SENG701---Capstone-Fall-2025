
// variable to save puppeteer 
const puppeteer = require('puppeteer');

async function scrapeBrowser(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.goto(url);
    await page.goto(url);
     const [el] = await page.$x('//*[@id="yDmH0d"]/c-wiz[5]/div/div/main/div/div[1]/div[2]');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValues();
    console.log({srcTxt});
    browser.close();
}
 scrapeBrowser('https://chromewebstore.google.com/category/extensions?utm_campaign=21676428212&utm_content=167305930939&utm_medium=cpc&utm_source=google&utm_term=chrome%20extension');