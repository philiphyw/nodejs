//compare with the server.js, experience the difference between express way and raw nodejs way in handling request and response
const express = require("express");

//express app
const app = express();

//listen for requests
app.listen(3000);

//Send response
//use the express res.send(), res.sendFile(0) function,
// will automatically add cooresponding value to the Content-Type
// will automatically add cooresponding infer the status code
//when use express res.sendFile(), it expects a definite path by default.
//if use relative path, need to use a object in the second para to define where the root is

app.get("/", (req, res) => {
  res.sendFile("./html/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./html/about.html", { root: __dirname });
});

//redirec
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.get("/contact", (req, res) => {
  res.sendFile("./html/contact.html", { root: __dirname });
});

//404 page, middle ware page
//app.use() act like the default section inside a switch loop. If there's no res match the code above this line, then will exetuive the use() code regardless the request content.
//so app.use() should be the very bottom of the file.
app.use((req, res) => {
  res.status(404).sendFile("./html/404.html", { root: __dirname });
});
