function Person(name, phoneNum){
this.name = name;
this.phoneNum = phoneNum;
}

Person.prototype.sayHi = function () {
    console.log('Hello, my name is',this.name);
    return this;
}

Person.prototype.sayBye = function (){
    console.log('Bye, call me at',this.phoneNum);
    return this;
}


const jim = new Person('Jimmy','1231231234');
const amy = new Person('Amanda','3213217654');


module.exports.user1 = jim;
module.exports.user2 = amy;