import http from "http";
import url from "url";

// url.parse()
http
  .createServer((request, response) => {
    console.log(request.url);
    const urlob = url.parse(request.url,true);
    console.log(urlob);
  })
  .listen(8082);
