const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf-8');

const regexPhone = /\(\d+\)\s\d+-\d+/g;

const matchRegexPhone = banco.match(regexPhone);
console.log(matchRegexPhone);