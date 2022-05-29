const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;
const pplate = require('./testC');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/js');
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync("getCalc.js");
        res.end(data.toString());
    }else if(req.url == '/home'){
        res.statusCode = 200;
        console.log(pplate.calc(10,80,'+'));
    }else if(req.url=="/Aboutus"){
        res.end("This is Our Aboutus Page!");
    }else{
        res.statusCode = 404;
        res.end("Not Found Page");
    }
});
server.listen(port,()=>{
    console.log(`Server is listen on port ${port}`);
});
