// * [unimportant comment]
// todo [pending work]
// ! [error]
// ? [doubt]

const getIssueCotent = require("./issue");

const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const maxIssues = 8;
const parentDirectory = "output";

// ! function written inside another function?
// ! what, where, when, why?
// todo having said, that, it will work fine in case if it is placed outside parent function

// url contains parent topic name
let childTopic;

function getReposPageHtml(url) {
    const parentTopic = url.substring(30);
    createDirectory(parentTopic);
    request(url, cb);

    function cb(error, response, body) {
        if (error) {
            console.log(error);
        } else if (response.statusCode == 404) {
            console.log("Page not found.");
        } else {
            getReposeLink(body, parentTopic);
        }
    }

    // here issues are present in class '.tabnav-tab.f6.px-2.py-1', along with some othere elements
    // to filter out issues, we selected only those element in above array in which href ends with 'issues', in case of other element
    function getReposeLink(html, parentDirectory) {
        const $ = cheerio.load(html);
        const elements = $(".tabnav-tab.f6.px-2.py-1");
        let count = 0;
        for (let i = 0; i < elements.length && count < maxIssues; i++) {
            const href = $(elements[i]).attr("href");
            const lastPart = href.substring(href.length - 6);

            if (lastPart == "issues") {
                let newURL = `https://www.github.com${href}`;
                getIssueCotent(newURL, parentDirectory);
                count++;
            }
        }
    }
}

function createDirectory(dirPath) {
    dirPath = path.join(__dirname, parentDirectory, dirPath);

    if (fs.existsSync(parentDirectory) == false) {
        fs.mkdirSync(parentDirectory);
    }

    if (fs.existsSync(dirPath) == false) {
        fs.mkdirSync(dirPath);
    }
}

module.exports = getReposPageHtml;

// ? future extension
/*
    todo output
        todo - old [contains records of previous transaction]
        todo - new [contains records of current transaction]

*/
