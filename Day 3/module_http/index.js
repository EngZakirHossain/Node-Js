const http = require('http');
const port = 3000;
const hostName = '127.0.0.1';
const myServer = http.createServer((req, res)=>{
    // res.end('Hello  i am your first server');
    res.writeHead(202,{'content-type':'text/html'});
    res.write("<h1>Server Test</h1>")
    res.end();
});

myServer.listen(3000,()=>{
    console.log(`server is running successfully at http://${hostName}:${port}`); //use `` for es6 technology
})
