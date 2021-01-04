//ref the Person class from file person.js 
const Person = require('./person');//const Person = require('./person.js'); will NOT work.
const person1 = new Person('Jim',42);

person1.greeting();


