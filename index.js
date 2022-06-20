
const express = require("express");

const passport = require("passport");
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

require('./auth');
const path = require("path");

app.set("view engine","ejs");

app.use("/static",express.static("static")); 

app.set("views",path.join(__dirname,"template"));
app.use(cookieParser());

const PORT = 500;
const Hostname = 'localhost';

function isLoggedIn(req, res, next) {
    req.user ? next() : res.render("404");
}

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {

    if(req.user){
        let em = req.user.email;
        let atpos = em.indexOf("@");
        let domain = em.split("@")[1]; 

        if (atpos < 1 || domain != "daiict.ac.in") { 
            res.render("index");
        } else {
            res.render("home",{title:req.user.displayName});
        }
    }else{
        res.render("home");
    }
    
});

app.get('/logout', (req, res, next) => {
    
    req.logout();
    res.clearCookie('connect.sid', {domain: "localhost"})
    res.redirect("/");
});

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }
));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/auth/google/failure'
    })
);

app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
});

app.listen(PORT,Hostname,()=>{
    console.log(`you website running at http://${Hostname}:${PORT}`);
});