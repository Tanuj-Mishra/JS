// * [unimportant comment]
// todo [pending work] 
// ! [error]
// ? [doubt]

// ! use url1, then try to click on login button, website will stop you by saying, that third party cookie is blocked.
// todo, what is this third party cookie, how to overcome it, implement it
// todo, implement this with all three -> callback, promise and async await to understand difference between all three.

// #tab-1-content-1 > div.login-form.auth-form.theme-m > form > div.form-item.clearfix > button

const puppeteer = require('puppeteer');
let currentPage;
const passwordSelector = '#input-2';
const emailSelector = '#input-1';
const loginButtonSelector = `button[type='submit']`;

const mail = 'nideleh886@evimzo.com';
const password = 'nideleh886@evimzo.com';

const warmupCheckbox = 'input[value="warmup"]';
let warmUpSelector;


// const url1 = 'https://www.hackerrank.com';
const url = 'https://www.hackerrank.com/auth/login';

const browserLaunchPromise = puppeteer.launch({
        headless:false,
        slowMol: true,
        defaultViewport: null,
        args:["--start-maximized"]    
});



browserLaunchPromise.then(function(browser) {
    console.log('Launching browser');
    const newPagePromise = browser.newPage();
    return newPagePromise;
}).then(function(page) {
    console.log('Getting browser context');
    currentPage = page;
    const navigatePromise = currentPage.goto(url);
    return navigatePromise;
}).then(function(response){
    console.log('Login Page Opened');
    const mailLoaded = currentPage.waitForSelector(emailSelector);
    return mailLoaded;
}).then(function(){
    console.log('mail loaded');
    const passwordLoaded = currentPage.waitForSelector(passwordSelector);
    return passwordLoaded;
})
// .then(function(){
//     console.log('password loaded');
//     const passwordLoaded = currentPage.waitForSelector(loginButtonSelector);
//     return passwordLoaded;
// })
.then(function() {
    // console.log('login button loaded');
    const emailFillPromise = currentPage.type(emailSelector,mail,{delay:50});
    return emailFillPromise;
}).then(function() {
    const passwordFillPromise = currentPage.type(passwordSelector,password,{delay:100});
    return passwordFillPromise;
}).then(function() {
    return currentPage.click(loginButtonSelector);
}).then(function() {
    console.log('login clicked');
    const algoClickPromise = waitAndClick('div[data-automation="algorithms"]', currentPage);
    return algoClickPromise;
})
.then(function(){
    const wait = waitForAWhile(5000,currentPage);
    return wait;
})
.then(function(){
    console.log('Before wait');
})
.then(function(){
    const warmUpClickPromise = waitAndClick('input[value="warmup"]',currentPage);
    return warmUpClickPromise;
})
.then(function(){
    const wait = waitForAWhile(5000,currentPage);
    return wait;
})
.then(function(){
    console.log('After wait');
})

// .then(function(){

//     console.log('clicked on warm up');
// })

// 'div[data-automation="algorithms"]'

.catch(function(error) {
    console.log(error);
} )


function waitForAWhile(milliSeconds,page){
    let waitPromise = page.waitFor(milliSeconds);
    
    waitPromise.then(function(){
        console.log('Waited for:',milliSeconds/1000,'seconds');
        return waitPromise;
    })

    waitPromise.catch(function(error){
        console.log(error);
    })

}

// ! not able to fully digest it
// todo use this function in other thins also, [login page]
function waitAndClick(selector, page) {
    return new Promise(function(resolve,promise){
        const waitForModelPromise = page.waitForSelector(selector);
        
        waitForModelPromise.then(function(){                // when selector is loaded on page
            const selectorClickPromise = page.click(selector, {delay:150});         // selector click promise
            return selectorClickPromise;
        }).then(function(){
            resolve();
        }).catch(function(){
            rejects();
        })
    })
}