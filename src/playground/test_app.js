import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js'


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

class OldSyntax{
    constructor(){
        this.name = 'adil';
        this.getGreeting = this.getGreeting.bind(this)
    }

    getGreeting(){
        return `Hi, My name is ${this.name}`
    }

}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

//-----------

class NewStynax {
    name = 'Jen'; //No need to define constructor function in this case, no need for let or var
    getGreeting = () => {
        return `Hi, My name is ${this.name}`;
    }
}
const newSyntax = new NewStynax()
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting())

// Default export example
// import subtract,{square, add} from './utils.js'
// import isSenior,  {isAdult, canDrink} from './person.js'