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

let id2programs = student.tv.programme.reduce((m,o) => {
  if (!(m[o.channel])) { m[o.channel]=[]; } 
  m[o.channel].push(o);
  return m;
}, {});

if (true) {
  // console.log(JSON.stringify(id2programs));
  for (let c in id2programs) {
    console.log(id2name[c][2]);
    let programmes = id2programs[c];
    programmes.forEach(p => {
	  let a = moment(p.start, 'YYYYMMDDhhmmss');
	  let b = moment(p.stop,  'YYYYMMDDhhmmss');
	  console.log(`\t${a} - ${b}: ${p.title.$t}`);
    });
  }
} else {
student.tv.programme.forEach(p => {
  let cNumber = id2name[p.channel][2];
  let a = moment(p.start, 'YYYYMMDDhhmmss');
  let b = moment(p.stop,  'YYYYMMDDhhmmss');
  console.log(`${cNumber}\t${a} - ${b}: ${p.title.$t}`);
});
}
