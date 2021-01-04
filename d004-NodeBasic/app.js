//import one single object

/*
const p = require('./people');
console.log('The selected people id is',p.pp[0].id);
console.log('The selected vip name is',p.vip[2]);
*/


//import multiple objects
const {pp,vip} = require('./people')//the variable names inside the bracket need to be the same as the module.exports variable name in source file. 

console.log('The selected people id is',pp[0].id);
console.log('The selected vip name is',vip[2]);


