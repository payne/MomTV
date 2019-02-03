var fs = require('fs');
var path = require('path');
var moment = require('moment');

let xmltv = require('xmltv');


function createParser (xmlName, programmeArray) {
    var input = fs.createReadStream(path.join(__dirname, xmlName));
    var parser = new xmltv.Parser();
    input.pipe(parser);

    parser.on('programme', function (programme) {
        programmeArray.push(programme);
    });

    return parser;
}


var guideProgrammes = [];
var guideParser = createParser('tvguide.xml', guideProgrammes);
guideParser.on('error', function (err) {
	console.log(`ERROR!!  ${err}`);
});
guideParser.on("end", function() {
	console.log(guideProgrammes);
});

/*
xmltv.on("programme", function(programme) {
  //Do something with programmes one by one as they are parsed
  console.log(programme);
});
xmltv.parseFile("tvguide.xml");
*/
