import http from 'http';

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<h1>This page running in port no 3456</h1>');
    res.write('<h2>This page running in port')
    res.write('<button>Submit Here</button>');
    res.end()



}).listen(3456);
