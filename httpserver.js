const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync("simpleHello.html");
        res.end(data.toString());
    }else if(req.url == '/Home'){
        res.statusCode = 200;
        res.end("This is Our Home Page!");
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
