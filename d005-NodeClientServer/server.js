const http = require("http");
const fs = require("fs");
const _ =require('lodash');

//port number is like a specific door to communicate for each different application
const port = 3000;

//create a server
const server = http.createServer((req, res) => {
  

  let targetPage = "./html/";
  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/":
      targetPage += "index.html";
      res.statusCode = 200;
      break;
    case "/contact":
      targetPage += "contact.html";
      res.statusCode = 200;
      break;
    case "/about":
      targetPage += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me": //redirect about-me.html to about.html
      //targetPage += "about.html";
      res.statusCode = 301;
      res.setHeader("location", "/about"); // ues responsive header to redirect the obsalete page to new page
      res.end();
      break;
    default:
      targetPage += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(targetPage, (err, data) => {
    if (err) {
      console.log("There is an error");
      console.log(err);
      res.end();
    } else {
      res.end(data); //equals to res.write(data), res.(end)
    }
  });
});

//create a listener for the server
server.listen(port, "localhost", () => {
  console.log(`listening for requests on port ${port}`);
});
