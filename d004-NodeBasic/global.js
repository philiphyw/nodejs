//in nodejs, there's a global object acts like the window object while running js in a browser.

//console.log(global);

//equals global.setInterval
let int1000 = setInterval(() => {
  console.log("In an interval every second.");
}, 1000);

setTimeout(() => {
  console.log("In a timeout");
  clearInterval(int1000); //need to provide the variable name of the to-be-cleared interval
}, 5000);

//__diname & __filename;
setTimeout(() => {
  console.log("The dir name is:", __dirname);
  console.log("The dir name is:", __filename);
}, 7000);
