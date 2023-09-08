import url from "url";
import fs from "fs";
import http from "http";
http
  .createServer((req, res) => {
    const path = req.url;
    
    if (path == "/home") {
      console.log("Home");
      res.writeHead(200, { "content-type": "text/html" });
      const filecontent = fs.readFileSync("./home.html");
      res.write(filecontent);
      res.end();
    } else if (path == "/main") {
      const filecontent = fs.readFileSync("./mainpage.html");
      res.write(filecontent);
      res.end();
    }
  })
  .listen(8082);
