import puppeteer from 'puppeteer'


const browser = await puppeteer.launch({
    slowMo : 70  , 
    headless : false 
})

//
const page = await browser.newPage()


// get the selector to query later .... /// 