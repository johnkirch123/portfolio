const puppeteer = require('puppeteer');

const scrapePrice = async (url, xPath) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      devtools: true,
      defaultViewport: {
        width: 1100,
        height: 1000
      }
    });
    const page = await browser.newPage();

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded' });
    } catch (err) {
      return 0;
    }

    try {
      await page.waitForXPath(xPath, { timeout: 500 });
    } catch (err) {
      return 0;
    }

    try {
      const [element] = await page.$x(xPath);
      const price = await page.evaluate((price) => price.innerText, element);
      if (parseFloat(price) !== NaN) return parseFloat(price);
    } catch (err) {
      return 0;
    }
    await browser.close();
    return 'Price is not a number';
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = scrapePrice;
