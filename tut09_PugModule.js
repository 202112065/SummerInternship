const express = require('express');
const path = require('path');

const app = express();

app.set('view engine','pug');

app.set('views',path.join(__dirname,"template"));

app.get("/",(req,res)=>{
    res.status(200).render("home",{title:"New Title",message:"This is Message For New tutorials!"});
});

app.listen(80,()=>{
    console.log("Running...")
});