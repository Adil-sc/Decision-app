class VisibilityToggle extends React.Component {

    // Override the constructor
    constructor(props){
        super(props)
        // Preserve the binding
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        // All the pieces of state we need to track
        this.state = {
            visibility: false
        };
    }


    handleToggleVisibility(){
        // Update the state based on the truthy/falsey value of state.visiblity
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render(){

        return (
            <div>
                <h1>Visibility Toggle</h1>
                {/*If visiblity is true, button will Hide, else Show*/}
                <button onClick = {this.handleToggleVisibility}>
                    {
                        this.state.visibility ? 'Hide Me': 'Show Me'
                    }
                </button>
                {/*If visiblity is true, message will show, else it wont*/}
                <p>{this.state.visibility ? 'This is some message' : ''}</p>
            </div>
        );

    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));