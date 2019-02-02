var xmltv = require('xmltv');
xmltv.on("programme", function(programme) {
  //Do something with programmes one by one as they are parsed
});
xmltv.parseFile("tvguide.xml");
