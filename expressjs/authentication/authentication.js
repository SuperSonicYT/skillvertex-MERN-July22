var express= require('express');
var router = express.Router();

router.get('/login',function(req,res) {
    res.render("login");
})
router.post('/login',function(req,res) {
    res.render('welcome', {
      
        id:24234234,
        aaddress:"bangalore",
        url:"https://www.google.com"
    })
})
router.get('/signup',function(req,res) {
    res.send("Registration page");
})
router.post('/signup',function(req,res) { 
    //code to register user
    res.send("Account registered successfully");
})

module.exports = router;