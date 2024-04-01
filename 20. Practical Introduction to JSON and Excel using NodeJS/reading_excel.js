// * [unimportant comment]
// todo [pending work] 
// ! [error]
// ? [doubt]

// todo -> read data present in excel sheet.

const fs = require('fs');
const xlsx = require("xlsx");
readExcel('Excel.xlsx', 'Processed data');

// access workbook
// access worksheet, in case if worksheet is not found, [] will be returned.
// read it's data(there are multiple options, will use json here)
function readExcel(filePath, sheetName) {
    if(fs.existsSync(filePath) == false) {
        return [];
    }

    const workBook = xlsx.readFile(filePath);
    const workSheet = workBook.Sheets[sheetName];           
    const data = xlsx.utils.sheet_to_json(workSheet);
    console.log(data);
}