const express    =   require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const router = express.Router();
app.get('/',(req,res)=>{
    res.end("This is Index page");
});
app.get('/home',(req,res)=>{
    const data = fs.readFileSync("simpleHello.html");
    res.send(data.toString());
});

app.get('/about',(req,res)=>{
    res.end("this is aboutus page");
});

app.use((err, req, res, next) => {
    res.status(500).send('Something broke!')
});

app.use(bodyParser.json());
app.use('/', router);

app.listen(process.env.port || 3000);