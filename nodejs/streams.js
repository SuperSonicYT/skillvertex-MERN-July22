/*
var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data',function(chunk) {
    data+=chunk;
})

readerStream.on('end',function(chunks) {
    console.log(data);
})
readerStream.on('error',function(err) {
    console.log(err.stack);
})

var data = "Copyright OpenJS Foundation and Node.js contributors. All rights reserved. The OpenJS Foundation has registered trademarks and uses trademarks. For a list of trademarks of the OpenJS Foundation, please see our Trademark Policy and Trademark List. Trademarks and logos not indicated on the list of OpenJS Foundation trademarks are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.The OpenJS Foundation | Terms of Use | Privacy Policy | Bylaws | Code of Conduct | Trademark Policy | Trademark List | Cookie Policy | Edit On GitHub";
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'UTF8');
writerStream.end();

writerStream.on('finish',function(chunk) {
    console.log("Write completed")
})
writerStream.on('error',function(err) {
    console.log(err.stack);
})


var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));
*/

var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('output.txt'));