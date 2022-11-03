var fs=require('fs');
var express = require('express');

var data1 = fs.readFileSync('input.txt');
console.log(data1.toString());

fs.readFile('input.txt',function(err, data) {
    console.log(data.toString());
});

fs.writeFile('input.txt','Hello world',function(err) {
    console.log('file rewritten')
})

console.log("Progrm ended");


fs.open('input.txt','w+',function(err,f) {
    console.log("File opened for reading");
})