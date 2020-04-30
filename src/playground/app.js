class   IndecisionApp extends React.Component{

    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    } 
    // Lifecycle methods
    componentDidMount(){
        
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if(options){
                this.setState(()=>({options}));
            }
        }catch(e){
            // Do nothing
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            // String representation of the options array
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);

        }
    }

    componentWillUnmount(){
        console.log('ComponentWillUnmount');
    }



    handleDeleteOptions(){
        // Uses implicit return instead of explicit return {}; in the body
        this.setState(()=>({
            options:[]    
        }));
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }));
    }

    handlePick(){

        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option)

    }

    handleAddOption(option){

        if (!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState)=>{
            return {
                options: prevState.options.concat([option])
            };
        });
    }

    render(){
        const subTitle = 'Put your lifde in the hands of a computer'
        
        
        return (
            <div >
                <Header  subtitle ={subTitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                {/*options/handleDeleteOptions are PROPS. We use props to pass data to other componenets*/}
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} 
                handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}



const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}
// Offer a default prop for title
Header.defaultProps = {
    title:'Indecision'
}

// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }


const Action =(props)=>{
        return (
            <div>
                {/**Calls the handlePick function from the parent Component */}
                <button onClick={props.handlePick} disabled={!props.hasOptions}>
                 What Should I do?
                 </button>
            </div>
        );
}

// class Action extends React.Component {

//     render(){
//         return (
//             <div>
//                 {/**Calls the handlePick function from the parent Component */}
//                 <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
//                  What Should I do?
//                  </button>
//             </div>
//         );
//     }
// }


const Options = (props)=>{
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all;</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
           {
               props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption}/>)
           }

        </div>
    );
} 

// class Options extends React.Component {
//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove all;</button>
//                {
//                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
//                }

//             </div>
//         );
//     }
// }


class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){

        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(()=>{
            return {
                error:error
            };
        });
        
        // Wipe the text box after valid input
        if (!error){
            e.target.elements.option.value = '';
        }

    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
            
        );
    }
}

const Option = (props)=>{
    return (
        <div>
            {props.optionText}
            <button onClick={(e)=>{props.handleDeleteOption(props.optionText)}}>remove</button>
        </div>
       );
}

// class Option extends React.Component {
//     render(){
//        return (
//         <div>
//             {this.props.optionText}
//         </div>
//        );
//     }
// }



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))