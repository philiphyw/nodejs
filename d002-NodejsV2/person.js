class Person{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }

    greeting(){
        console.log(`Hello, my name is ${this.name}, I\'m ${this.age} years old.`)
    }
}

//without the exports command, this module can not be requried by other
module.exports = Person;

