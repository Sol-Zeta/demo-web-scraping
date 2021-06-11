const puppeteer = require("puppeteer");



const scrap = async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto("https://www.imdb.com/title/tt0322259/");
  const wait = await page.waitForTimeout(1000).then(() => console.log('Waited a second!'));
  console.log("wait", wait)
  const data = await page.evaluate(() => {
    const title = document.querySelector("h1").innerText;
    //const summary = document.querySelector("#title-overview-widget > div.plot_summary_wrapper > div.plot_summary > div.summary_text").innerText;
    const summary_one = document.querySelector("#__next > main > div > section.ipc-page-background.ipc-page-background--base.TitlePage__StyledPageBackground-wzlr49-0.dDUGgO > section > div:nth-child(4) > section > section > div.Hero__MediaContentContainer__Video-kvkd64-2.kmTkgc > div.Hero__ContentContainer-kvkd64-10.eaUohq > div.Hero__MetaContainer__Video-kvkd64-4.kNqsIK > div.GenresAndPlot__ContentParent-cum89p-9.hKjEWr.Hero__GenresAndPlotContainer-kvkd64-11.twqaW > p > span.GenresAndPlot__TextContainerBreakpointM-cum89p-2.iJnWgZ")
    const summary_two = document.querySelector("#title-overview-widget > div.plot_summary_wrapper.localized > div.plot_summary > div.summary_text.ready > div > div.plot-text > div > div")
    //#title-overview-widget > div.plot_summary_wrapper > div.plot_summary > div.summary_text

    console.log("summary", summary_one, 2, summary_two)
    return {
      title,  
      summary: summary_one ? summary_one.innerText : summary_two.innerText
    }

 });

 await browser.close();

 return data
}

module.exports = scrap
