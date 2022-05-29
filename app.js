//console.log("hello world!");

//in this tutorial we learn how to create static server and how to serving particular file / code
//nodemon auto restart server module

const http = require('http');
const port = 800;
const hostname = '127.0.0.2';

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url == '/'){
        res.end("this is home page");
    }else if(url == "/aboutus"){
        res.end("welcome to our aboutus page");
    }else if(url == "/contactus"){
        res.end("welcome to our contact us page");
    }else{
        res.end("Page Not Found!");
    }
});

server.listen(port,hostname,()=>{
    console.log(`static server running at http://${hostname}:${port}`);
});