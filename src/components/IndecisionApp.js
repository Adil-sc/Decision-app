import React from 'react';
import AddOption from './AddOption.js'
import Action from './Action.js'
import Header from './Header.js'
import Options from './Options.js'
import OptionModal from './OptionModal.js'

export default class IndecisionApp extends React.Component{
    // By using class properties instead, we don't need to manually bind things or
    // use the constructor function. We can set state outside of the constructor func
    // as well as use arrow functions for class properties. 

    // constructor(props){
    //     super(props)
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //         options: []
    //     };
    // } 
    // Lifecycle methods

    state = {
        options:[],
        selectedOption:undefined
    };


    handleDeleteOptions = ()=>{
        // Uses implicit return instead of explicit return {}; in the body
        this.setState(()=>({
            options:[]    
        }));
    }

    handleDeleteOption =(optionToRemove) =>{
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }));
    }

    handlePick =()=>{

        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        
        this.setState(()=>{
            return {
                selectedOption:option
            };
            
        });

    }

    handleClearSelectedOption = ()=>{
        this.setState(()=>{
            return {
                selectedOption:undefined
            }
        });
    }

    handleAddOption =(option)=>{

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


    render(){
        const subTitle = 'Put your lifde in the hands of a computer'

        return (
            <div >
                <Header  subtitle ={subTitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                    {/*options/handleDeleteOptions are PROPS. We use props to pass data to other componenets*/}
                    
                    <div className="widget">
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} 
                        handleDeleteOption={this.handleDeleteOption}/>
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>

                </div>
                

                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}></OptionModal>
            </div>
        );
    }
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





// class Option extends React.Component {
//     render(){
//        return (
//         <div>
//             {this.props.optionText}
//         </div>
//        );
//     }
// }