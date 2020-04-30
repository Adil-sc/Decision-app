// Arrow functions are anonymous, that is why they must be assinged to a variable
// const square = (x) =>{
//     return x*x
// }

const squareArrow = (x) => x*x

const getFirstName = (fullName) => fullName.split(' ')[0]

// Argument object
const add = (a, b) =>{
    // console.log(arguments) <--- does not work in arrow functions
    return a+ b
}

// this keyword. Arrow functiuons do not bind this value. 
const user = {
    name:'Adil',
    cities:['Tor', 'London'],
    printPlacesLived(){
        console.log(this.name)
        this.cities.forEach(function(city){
            console.log(this.name + 'has lived in '+ this.city)
        });
    }
}