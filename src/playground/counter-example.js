
// let count = 0
// const addOne = ()=>{
//     count += 1;
//     renderCounterApp();
// }

// const minusOne = ()=>{
//     count -=1;
//     renderCounterApp()
    
// }

// const reset = () =>{
//     count = 0
//     renderCounterApp();
// }



// const renderCounterApp = () =>{
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick ={addOne}> +1</button>
//             <button onClick ={minusOne}> -1</button>
//             <button onClick ={reset}> reset</button>
//         </div>
//     );
    
//     ReactDOM.render(templateTwo, appRoot);
        
// }

// renderCounterApp();


class Counter extends React.Component {

    constructor(props){

        super(props)
        // Have to bind methods that are being passed to event handles like onClick, that are using the this keyword
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count:0
        };

    }

    // Lifecycle method
    componentDidMount(){
        // Read from local storage
        
        const count = parseInt(localStorage.getItem('count'),10);
        if (isNaN(count)){
            this.setState(()=>({count:0}));
        }else{
        this.setState(()=>({count:count}));
        }
    }

    componentDidUpdate(prevProps, prevState){
        // Write to local storage
        const count = this.state.count;
        localStorage.setItem('count', count);

    }
 
    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count -=1
            };
        });
    }

    handleReset(){
        this.setState(()=>{
            return {
                count:0
            };
        });
    }


    render(){
        return (
            <div>
                <h1>Count:{this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'))