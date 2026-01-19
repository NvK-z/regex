const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf-8');

const regexNames = /^([A-Za-zÀ-ÿ]+)(\s[A-Za-zÀ-ÿ]+)+/gm;

const matchRegexNames = banco.match(regexNames);
console.log(matchRegexNames);