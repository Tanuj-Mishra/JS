// * [unimportant comment]
// todo [pending work]
// ! [error]
// ? [doubt]

// todo read data from json, and store it to excel.
// todo excel has two sheets, first one contains unprocessed data read from json, while second contains processed data from json.

// ! add notes about cheerio and request, what they are etc.

const url = "https://www.github.com/topics";
const request = require("request");
const cheerio = require("cheerio");
const getReposPageHtml = require("./reposPage");

request(url, cb);

function cb(error, response, body) {
    if (error) {
        console.log(error);
    } else if (response.statusCode == 404) {
        console.log("Page not found.");
    } else {
        // console.log(body);
        getTopicLinks(body);
    }
}

// ! ` vs ' vs ""
// ! in case of `, + can't be used, and it is bit modern.

// here, topics are having class 'no-underline d-flex flex-column flex-justify-center'
function getTopicLinks(html) {
    const $ = cheerio.load(html); // to get selector for 'html'
    const topicArray = $(
        ".no-underline.d-flex.flex-column.flex-justify-center"
    );
    for (let i = 0; i < topicArray.length; i++) {
        let attr = $(topicArray[i]).attr("href");
        attr = attr.replace("/topics", "");
        getReposPageHtml(url + attr);
    }
}
