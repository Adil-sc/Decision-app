


class Person {

    // Constructor function
    constructor(name='Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi I'm ${this.name}.`
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        // Override construyctor function
        super(name, age); 
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` Their major is ${this.major}`
        }
        return description
    }

}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;

    }

    getGreeting(){
        let greeting = super.getGreeting();
        if (this.homeLocation){
            greeting += `I'm visiting from ${this.homeLocation}`
        }
        return greeting
    }

}


const me = new Person('Adil',27);
const other = new Student('Adil', 27, 'Computer Science')
const other2 = new Traveler('Adil', 27, 'Toronto')
console.log(me.getGreeting());
console.log(other2.getGreeting())