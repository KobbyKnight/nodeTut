const http = require('http');
const fs = require('fs');
/*
const server = http.createServer((req,res)=>{
    if (req.url === "/") {
        res.write('Hello World from Nodejs');
        res.end();
    }else{
        res.write('unknown domain');
        res.end();
    }
    
});

//select the port to use
server.listen('3000');
*/

/**
 * serve static files
 *
 */
http.createServer((req,res)=>{
    const rs = fs.createReadStream('./static/index.html');
    res.writeHead(200,{'Content-type':'text/html'});
    rs.pipe(res);
}).listen(3000);
