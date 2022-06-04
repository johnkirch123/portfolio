const puppeteer = require('puppeteer');

const scrapePrice = async (url, xPath) => {
  const collections = [];
  try {
    const browser = await puppeteer.launch({
      headless: false,
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
      console.error(err.message);
    }

    await page.screenshot({ path: 'collections.png' });
    try {
      await page.waitForXPath(
        '//*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[9]',
        { timeout: 2000 }
      );
    } catch (err) {
      console.error(err.message);
    }

    try {
      // Rank
      const [collectionRank] = await page.$x(
        '//*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[1]/div'
      );
      const rank = await page.evaluate(
        (rank) => rank.innerText,
        collectionRank
      );

      // Name
      const [collectionName] = await page.$x(
        '//*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[3]/div'
      );
      const name = await page.evaluate(
        (name) => name.innerText,
        collectionName
      );

      // Total Value
      const [collectionTotVol] = await page.$x(
        '//*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[4]/div'
      );
      const totVol = await page.evaluate(
        (totVol) => totVol.innerText,
        collectionTotVol
      );

      // Weekly Volume
      const [collectionWV] = await page.$x(
        '//*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[5]/div'
      );
      const weeklyVolume = await page.evaluate(
        (weeklyVolume) => weeklyVolume.innerText,
        collectionWV
      );
      const wVArr = weeklyVolume.split(' ');

      // Daily Volume
      const [collectionDV] = await page.$x(
        '//*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[6]/div'
      );
      const dailyVolume = await page.evaluate(
        (dailyVolume) => dailyVolume.innerText,
        collectionDV
      );
      const dVArr = dailyVolume.split(' ');

      const collectionObj = {
        rank,
        name,
        totVol,
        weeklyVolume: wVArr[0].slice(0, -2),
        weeklyVolumePercent: weeklyVolume.includes('-')
          ? '-' + wVArr[1]
          : '+' + wVArr[1],
        dailyVolume: dVArr[0].slice(0, -2),
        dailyVolumePercent: dailyVolume.includes('-')
          ? '-' + dVArr[1]
          : '+' + dVArr[1]
      };

      collections.push(collectionObj);
      // if (parseFloat(price) !== NaN) return parseFloat(price);
    } catch (err) {
      console.error(err.message);
    }
    await browser.close();
    return collections;
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = scrapePrice;

// xpathLink = //*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]
// xpathRank = //*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[1]/div
// xPathImage = //*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[2]/div/div/img
// xPathName = //*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[3]/div
// xPathTV = //*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[4]/div
// xPathWV = //*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[5]/div
// xPathWVP = //*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[5]/div/div[2]
// xPathDV = //*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[6]/div
// xPathDVP = //*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[6]/div/div[2]
// xPathTotSales = //*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[7]
// xPathFP = //*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[8]/div
// xPathATH = //*[@id="__next"]/div/div/div/div[1]/div[3]/div/div[3]/div/div/div/a[1]/div[9]
