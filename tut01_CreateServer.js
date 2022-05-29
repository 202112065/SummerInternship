const http = require("http");

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req,res)=>{

    res.statusCode = 200;

    res.setHeader("Content-Type","text/html");

    res.end("<html></head></head><body><h1>Hello Welcome to this world!</h1></body></html>");

});

server.listen(port,hostname,()=>{
    console.log(`this server running to at http://${hostname}:${port}/`);
});
