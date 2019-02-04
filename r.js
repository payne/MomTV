'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('tvguide.json');  
let student = JSON.parse(rawdata);  
console.log(JSON.stringify(student));  
