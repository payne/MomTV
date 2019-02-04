'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('tvguide.json');  
let student = JSON.parse(rawdata);  
//let idArray = student.tv.channel.map(c => c.id);
let id2name = student.tv.channel.reduce((m,o) => {
  m[o.id]=o['display-name'];
  return m;
}, {});
console.log(JSON.stringify(id2name));


