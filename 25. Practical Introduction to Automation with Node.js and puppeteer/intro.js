// * [unimportant comment]
// todo [pending work]
// ! [error]
// ? [doubt]

// todo watch first 10 minutes of theroy

// todo after completing lecture, create one more file, in which same code is there, but without serial execution

// here we can't use vanilla js

const puppeteer = require('puppeteer');
let currentPage;

// ? what is below syntax of passsing parameter
// const browserOpenPromise = puppeteer.launch({headless: false});
// const a = currentPage.waitForSelector('textarea', {visible:true});


const browserOpenPromise = puppeteer.launch({
    headless: false,
    slowMol: true,
    defaultViewport: null,
    args:["--start-maximized"]
});

browserOpenPromise.then(function(browserContext) {
    console.log('Launching browser');
    const pageArrayPromise = browserContext.pages();
    return pageArrayPromise;
}).then(function(browserPages) {
    // open url 
    currentPage = browserPages[0];
    const gotoPromise = currentPage.goto('https://www.google.com');
    return gotoPromise;
}).then(function() {
    // waiting for that particular element to be rendered
    const elementWaitPromise = currentPage.waitForSelector('textarea', {visible:true});
    return elementWaitPromise;
}).then(function() {
    const keySendPromise = currentPage.type('textarea','pepcoding');
    return keySendPromise;
}).then(function() {
    const keyPressPromise = currentPage.keyboard.press('Enter');
    return keyPressPromise;
}).then(function() {
    const elementWaitPromise = currentPage.waitForSelector('h3.LC20lb.MBeuO.DKV0Md',{visible:true});
    return elementWaitPromise;
}).then(function() {
    const linkPressPromise = currentPage.click('h3.LC20lb.MBeuO.DKV0Md');
    return linkPressPromise;
}).catch(function(error) {
    console.log(error);
})



