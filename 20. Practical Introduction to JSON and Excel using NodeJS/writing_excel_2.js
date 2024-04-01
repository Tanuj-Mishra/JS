// * [unimportant comment]
// todo [pending work] 
// ! [error]
// ? [doubt]

// todo read data from json, and store it to excel.
// todo excel has two sheets, first one contains unprocessed data read from json, while second contains processed data from json.

const xlsx = require("xlsx");
const fs = require('fs');

const buffer = fs.readFileSync('./input.json');

const originalData = JSON.parse(buffer); 
const cookedData = JSON.parse(buffer);

for(let i = 0; i < cookedData.length; i++) {
    cookedData[i].friends = cookedData[i].friends.toString();
    const obj = cookedData[i].object;
    const key1 = obj.key1.toString();
    const key2 = obj.key2.toString();
    const temp = key1 + ", " + key2;
    cookedData[i].object = temp;
}



// here [cookedData] is different from [originalData]
writeExcel(originalData,'Unprocessed data', cookedData, 'Processed data','Excel.xlsx');

// create workbook
// create worksheet(there are multiple options, here we will use json to sheet)
// append worksheet to workbook
// save workbook
function writeExcel(json1, sheetName1, json2, sheetName2, filePath) {
    const workBook = xlsx.utils.book_new();
    const workSheet1 = xlsx.utils.json_to_sheet(json1);
    const workSheet2 = xlsx.utils.json_to_sheet(json2);
    xlsx.utils.book_append_sheet(workBook, workSheet1, sheetName1);
    xlsx.utils.book_append_sheet(workBook, workSheet2, sheetName2);
    xlsx.writeFile(workBook,filePath);
}
