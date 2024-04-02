// * [unimportant comment]
// todo [pending work]
// ! [error]
// ? [doubt]

const request = require("request");
const cheerio = require("cheerio");
const fs = require('fs');
const path = require('path');

const maxIssues = 8;

// ! functino written inside another function?
// ! what, where, when, why?
// todo having said, that, it will work fine in case if it is placed outside parent function

// url contains parent topic name
let childTopic;
const outputDirectory = 'output';

function getReposPageHtml(url) {
    const parentTopic = url.substring(30);
    createDirectory(parentTopic);
    request(url, cb);
    
    function cb(error, response, body) {
        if (error) {
            console.log(error);
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
                // console.log(newURL,href);

                getIssueCotent(newURL, parentDirectory);
                count++;
            }
        }
    }

    function getIssueCotent(url, parentDirectory) {
        request(url, function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
                const $ = cheerio.load(body);
                const parentElements = $(
                    ".flex-auto.min-width-0.p-2.pr-3.pr-md-2 > a"
                );
                // console.log(url);           // https://www.github.com/babel/babel/issues
                url = url.replace('/issues','');  // https://www.github.com/babel/babel
                const lastSlash = url.lastIndexOf('/');
                childTopic = url.substring(lastSlash+1);        // babel

                let data = [];
                for (let i = 0; i < parentElements.length; i++) {
                    let a = $(parentElements[i]).text();
                    data.push(a);
                }
                const filePath = path.join(outputDirectory,parentDirectory,childTopic+'.json');
                createFile(filePath,data);
                // console.log(parentTopic,childTopic, data);
            }
        });
    }
}


function createDirectory(dirPath) {
    let parentDirectory = 'output';
    dirPath = path.join(parentDirectory,dirPath);

    if(fs.existsSync(parentDirectory) == false) {
        fs.mkdirSync(parentDirectory);
    }

    if(fs.existsSync(dirPath) == false) {
        fs.mkdirSync(dirPath);
    }

}

function createFile(filePath,data) {

    const buffer = JSON.stringify(data);
    if(fs.existsSync(filePath) == false) {
        fs.writeFileSync(filePath,buffer);
    }
}

module.exports = getReposPageHtml;


// ? future extension
/*
    todo output
        todo - old [contains records of previous transaction]
        todo - new [contains records of current transaction]

*/