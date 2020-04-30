console.log('utils.js is running');

export const square =(x) =>{return x*x}
export const add = (a,b) =>{return a+b}
const subtract = (a, b) =>{return a-b}

export default subtract;


// export {square, add, subtract as default};
// Can setup as many exports using export keyboard, but can only have one default import