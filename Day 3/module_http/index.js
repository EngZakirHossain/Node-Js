const http = require('http');
const port = 3000;
const hostName = '127.0.0.1';
const myServer = http.createServer((req, res)=>{
    res.end('Hello  i am your first server');
});

myServer.listen(3000,()=>{
    console.log(`server is running successfully at http://${hostName}:${port}`); //use `` for es6 technology
})
