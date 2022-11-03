

var buf4 = new Buffer.alloc(256);
for(var i=0;i<256;i++) {
    buf4[i] =i+97;
}
console.log(buf4.toString('utf-8',0,26));
console.log(buf4.toJSON(buf4));