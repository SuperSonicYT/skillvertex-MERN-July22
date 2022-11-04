var express = require('express');
var router = express.Router();

router.get('/login', function(req,res) {
    res.render("login");
});

router.post('/login', function(req,res) {
    if(req.body.email=='akash@gmail.com' && req.body.pwd=='12345') {
        res.render('/', {
            username:"Akash Soni"
        })
    }
    else {
        res.render('login',{
            errormsg:"Username or password did not match"
        });
    }
    
});

module.exports = router;
