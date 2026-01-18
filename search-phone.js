const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf-8');

const regexPhone = /\(\d{2}\)\s\d{4,5}-\d{4}/g;

const matchRegexPhone = banco.match(regexPhone);
console.log(matchRegexPhone);

const patternCel = /\(\d{2}\)\s\d{5}-\d{4}/g;

const matchRegexCel = banco.match(patternCel);
console.log(matchRegexCel);