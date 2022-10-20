const http = require('http');
const fs = require('fs');

let port = 3000;
let hostName = '127.0.0.1';

const myServer = http.createServer((req, res)=>{

    const  handleReadFile = (statusCode,fileLocation) =>{
        fs.readFile(fileLocation,(err, data)=>{
            res.writeHead(statusCode,{'content-type':"text/html"});
            res.write(data);
            res.end();
        })
    }
    if (req.url === '/'){
        handleReadFile(200,'./views/index.html');
    }else if (req.url === '/about'){
        handleReadFile(200,'./views/about.html');
    }else if (req.url === '/contract'){
        handleReadFile(200,'./views/contract.html');
    }else{
        handleReadFile(404,'./views/error.html');
    }
});
myServer.listen(port,hostName,()=>{
    console.log(`server is running successfully at http://${hostName}:${port}`); //use `` for es6 technology
})
