// * [unimportant comment]
// todo [pending work]
// ! [error]
// ? [doubt]

const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const pdfkit = require("pdfkit");
const outputDirectory = "output";

function getIssueCotent(url, parentDirectory) {
    request(url, function (error, response, body) {
        if (error) {
            console.log(error);
        } else if (response.statusCode == 404) {
            console.log("Page not found.");
        } else {
            const $ = cheerio.load(body);
            const parentElements = $(
                ".flex-auto.min-width-0.p-2.pr-3.pr-md-2 > a"
            );
            // console.log(url);           // https://www.github.com/babel/babel/issues
            url = url.replace("/issues", ""); // https://www.github.com/babel/babel
            const lastSlash = url.lastIndexOf("/");
            childTopic = url.substring(lastSlash + 1); // babel

            let data = [];
            for (let i = 0; i < parentElements.length; i++) {
                let a = $(parentElements[i]).text();
                data.push(a);
            }
            const filePath = path.join(
                __dirname,
                outputDirectory,
                parentDirectory,
                childTopic
            );
            createJsonFile(filePath + ".json", data);
            createPdfFile(filePath + ".pdf", data);
            // console.log(parentTopic,childTopic, data);
        }
    });
}

function createJsonFile(filePath, data) {
    data = JSON.stringify(data);
    if (fs.existsSync(filePath) == false) {
        fs.writeFileSync(filePath, data);
    }
}

function createPdfFile(filePath, data) {
    data = JSON.stringify(data);
    const doc = new pdfkit();
    const filename = path.basename(filePath);
    doc.pipe(fs.createWriteStream(filePath));
    doc.text(data, 10, 10);
    doc.end();
}

module.exports = getIssueCotent;

// todo remove output directory from github files.