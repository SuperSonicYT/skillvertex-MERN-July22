var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(upload.array());
app.use(cookieParser());
app.use(session({secret:"This is a secret"}));


app.set('view engine','pug');
app.set('views','./views');


mongoose.connect('mongodb+srv://akashsoni298:akashsoni298@mern-sept22.auhwoul.mongodb.net/jain-university')
var userSchema = mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    nationality:String,
    pwd:String
});

var User = mongoose.model("User",userSchema);
module.exports = {User};


var authentication = require('./authentication.js');
app.use('/authentication',authentication);


app.get('/', function(req,res) {
    if(req.cookies) {
        console.log(req.cookies);
    }
    res.cookie('cookie1','hellio',{maxAge:360000}).render("index",{
        username:req.session.username
    });
});

app.get('/logout',function(req,res) {
    req.session.destroy(function() {
        console.log('user logged out');
    });
    res.redirect('/');
});


app.listen(3000, function() {
    console.log("App running on http://localhost:3000");
})