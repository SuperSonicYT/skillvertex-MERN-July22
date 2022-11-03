var express=require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var authentication = require('./authentication/authentication.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cookieParser());

app.use(session( {secret:"expressjs"} ));

app.use('/static',express.static('public'));
app.use('/images',express.static('images'));

app.set('view engine','pug');
app.set('views','./views');


app.use('/authentication',function(req,res,next) {
    console.log('Request received at:'+Date.now());
    next();
});

app.use('/authentication',authentication);

app.use('/authentication',function(req,res,next) {
    console.log('Request received at:'+Date.now());
    next();
});

app.get('/',function(req,res) {
    res.render('index');
});

app.get('/products',function(req,res) {
    res.send("Display all products")
})
app.get('/products/:filter',function(req,res) {
    res.send("Display all products with filter: "+req.params.filter);
})
app.get('/product/:id([a-z]{2}[0-9]{4}[A-Z]{1})',function(req,res) {
    res.send("Details of product: "+req.params.id);
})
app.get('*',function(req,res) {
    res.send("Error message");
})
app.listen(3000);