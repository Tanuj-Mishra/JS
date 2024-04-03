// * [unimportant comment]
// todo [pending work]
// ! [error]
// ? [doubt]

// todo watch first 10 minutes of theroy

// todo after completing lecture, create one more file, in which same code is there, but without serial execution

const puppeteer = require('puppeteer');
let currentPage;

// ? what is below syntax of passsing parameter
// const browserOpenPromise = puppeteer.launch({headless: false});
// const a = currentPage.waitForSelector('textarea', {visible:true});


const browserOpenPromise = puppeteer.launch({headless: false});

browserOpenPromise.then(function(browserContext) {
    console.log('Launching browser');
    const pageArrayPromise = browserContext.pages();
    return pageArrayPromise;
}).then(function(browserPages) {
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
    const a = document.querySelectorAll('.yuRUbf span a');
    
})

.catch(function(error) {
    console.log(error);
})


browserOpenPromise.catch(function(error) {
    console.log(error);
});
