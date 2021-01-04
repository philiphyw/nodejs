//url is one of the built-in modules in nodejs. so it's no need to specify the file when requiring it.
const url = require('url');
const address = 'https://www.w3schools.com/jsref/prop_img_src.asp';
const parsedUrl = url.parse(address,true);
console.log(parsedUrl.pathname)