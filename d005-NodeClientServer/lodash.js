const _ =require('lodash');


//random
const num = _.random(0,20)
console.log(num);

//set a function to be allowed to run only once. 
const greet = _.once(()=>{
    console.log('I can show only once.');
})

greet();
greet();

