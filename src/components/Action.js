import React from 'react';

const Action =(props)=>{
    return (
        <div>
            {/**Calls the handlePick function from the parent Component */}
            <button className="big-button" onClick={props.handlePick} disabled={!props.hasOptions}>
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

export default Action