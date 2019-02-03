let fs = require("fs");
let path = require("path");
let moment = require("moment");

let xmltv = require("xmltv");
let xmlName = "tvguide.xml";
let guideProgrammes = [];

let input = fs.createReadStream(path.join(__dirname, xmlName));
let parser = new xmltv.Parser();
input.pipe(parser);

parser.on("programme", function(programme) {
  guideProgrammes.push(programme);
});

parser.on("error", function(err) {
  console.log(`ERROR!!  ${err}`);
});
parser.on("end", function() {
  console.log(guideProgrammes);
});
