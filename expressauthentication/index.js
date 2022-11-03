var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');

var app = express();
var upload = multer();


//parsing application/json
app.use(bodyParser.json());
//parsing form encoded data
app.use(bodyParser.urlencoded({extended:true}));
//form multipart data
app.use(upload.array());


app.set('view engine','pug');
app.set('views','./views');


app.get('/', function(req,res) {
    res.render("index");
});

app.listen(3000, function() {
    console.log("App running on http://localhost:3000");
})