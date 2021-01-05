//compare with the server.js, experience the difference between express way and raw nodejs way in handling request and response
const express = require("express");
//morgan is a 3rd party middleware
const morgan = require('morgan') ;

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");
app.set("views", "htmls"); // if the htmls are stored in a folder called 'views', then this line is no longer needed.

//listen for requests
app.listen(3000);


//a middleware as a logger to record requests info
//if put the app.use on the top of the file, all requests will be handled by the app.use and disregard handlers after it.
//if need to move forward af ter app.use, need to add a next method as the third para and call it at the end of the app.use
/*
app.use((req, res,next) => {
  console.log('new request made:');
  console.log('host:',req.hostname);
  console.log('path:',req.path);
  console.log('method:',req.method);
  next();//without this line, app.use will hang in and no more code will be executived.
});
*/

//app.use(express.static(target folder)), this express built-in middleware will make a folder static, which
//will make files in this folder as static files and available to the front end.
app.use(express.static('public'));

//app.use(morgan()), as a 3rd party middleware, can act as a logger to replace above app.use((req, res,next) logger
app.use(morgan('common'));






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


//a middleware to return a 404 page
//if a request didn't find a match on the handlers above, will executive below app.use() to return
app.use((req, res) => {
  res.status(404).render("404",{title:'Page Not Found'});
});



