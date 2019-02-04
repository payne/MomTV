'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('tvguide.json');  
let student = JSON.parse(rawdata);  
let idArray = student.tv.channel.map(c => c.id);
console.log(JSON.stringify(idArray));


