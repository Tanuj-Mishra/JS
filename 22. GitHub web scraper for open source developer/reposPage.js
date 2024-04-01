// * [unimportant comment]
// todo [pending work]
// ! [error]
// ? [doubt]

const request = require("request");
const cheerio = require("cheerio");

// ! functino written inside another function?
// ! what, where, when, why?
// todo having said, that, it will work fine in case if it is placed outside parent function

function getReposPageHtml(url) {
    request(url, cb);

    function cb(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            // console.log(body);
            get(body);
        }
    }

    function get(html) {
        const $ = cheerio.load(html);
        const elements = $(".tabnav-tab.f6.px-2.py-1");
        for(let i = 0; i < elements.length; i++) {
            const href = $(elements[i]).attr('href');
            console.log(href);
        }
    }
}



module.exports = getReposPageHtml;
