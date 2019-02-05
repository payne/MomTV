"use strict";

const fs = require("fs");
const moment  = require("moment");

let rawdata = fs.readFileSync("tvguide.json");
let student = JSON.parse(rawdata);
//let idArray = student.tv.channel.map(c => c.id);
let id2name = student.tv.channel.reduce((m, o) => {
  m[o.id] = o["display-name"];
  return m;
}, {});
// console.log(JSON.stringify(id2name));
student.tv.programme.forEach(p => {
  let cNumber = id2name[p.channel][2];
  let a = moment(p.start, 'YYYYMMDDhhmmss');
  let b = moment(p.stop,  'YYYYMMDDhhmmss');
  console.log(`${cNumber}\t${a} - ${b}: ${p.title.$t}`);
});
