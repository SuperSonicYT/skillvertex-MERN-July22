var express = require('express');
var router = express.Router();
var {User} = require('./index.js');


router.get('/login', function(req,res) {
    res.render("login");
});

router.post('/login', function(req,res) {
    var loginInfo = req.body;
    if(!loginInfo.email || !loginInfo.pwd) {
        res.render('register',{ errormsg:"All fields are mandatory"});
    }
    else {
        User.findOnean({email:loginInfo.email,pwd:loginInfo.pwd},function(err,response) {
            if(err) {
                res.render('login',{ errormsg:"Passwords entered did not match"});
            }
            else{
                req.session.username=response.name;
                console.log(req.session.username);
                res.redirect('/');
            }
        })
    }
});

router.get('/signup', function(req,res) {
    res.render('register');
});

router.post('/signup', function(req,res) {
    var userInfo = req.body;
    if(!userInfo.name || !userInfo.age || !userInfo.nationality || !userInfo.email || !userInfo.pwd ||!userInfo.cpwd) {
        res.render('register',{ errormsg:"All fields are mandatory"});
    }
    else if(userInfo.pwd!=userInfo.cpwd) {
        res.render('register',{ errormsg:"Passwords entered did not match"});
    }
    else {
        var newUser = new User({
            name:userInfo.name,
            age:userInfo.age,
            nationality:userInfo.nationality,
            email:userInfo.email,
            pwd:userInfo.pwd
        })

        newUser.save(function(err,User) {
            if(err) {
                res.render('register',{ errormsg:"Database error"});
            }
            else {
                res.render('login');
            }
        })
    }

});

module.exports = router;
