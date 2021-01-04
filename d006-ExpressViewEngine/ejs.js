//compare with the server.js, experience the difference between express way and raw nodejs way in handling request and response
const express = require("express");

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");
app.set("views", "htmls"); // if the htmls are stored in a folder called 'views', then this line is no longer needed.

//listen for requests
app.listen(3000);

//instead of send a html file, express will render a ejs view from the views folder.

const blogs = [
  {title:'Philip finds eggs', snippet:"this is the first snippet"},
  {title:'Celia finds tomatos', snippet:"this is the second snippet"},
  {title:'Children love fried eggs with tomatos', snippet:"this is the third snippet"}
]


app.get("/", (req, res) => {
  //besides database, can pass an object as the second para to render(), and the relevant ejs page can access the object and all its properties
  res.render("index", {title:'Home', blogs:blogs});
});

app.get("/about", (req, res) => {
  res.render("about",{title:'About'});
});

app.get("/blogs/create", (req, res) => {
  res.render("create",{title:'Create New Blog'});
});

app.use((req, res) => {
  res.status(404).render("404",{title:'Page Not Found'});
});




