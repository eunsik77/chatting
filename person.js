// const person = {
//     name: 'Eunsik',
//     age: 27
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My name is ${this.name} and I am ${this.name}`);
    }
    goodbye() {
        console.log(` ${this.name}아 가제이~ `);
    }
}
module.exports = Person;