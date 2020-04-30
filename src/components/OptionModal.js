import React from 'react';
import Modal from 'react-modal';


// Stateless functional componenet because it does not need to manage state
const OptionModal = (props) =>{
    return (
        <Modal isOpen={!!props.selectedOption} onRequestClose={props.handleClearSelectedOption} contentLabel="Selected Option" closeTimeoutMS={200} className="modal">
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            {/*handleClearSelectedOption is a function we pass in as a prop.
            When the modal opens, we can press the Okay button to call that function. 
            That function sets the state of selectedOption, which isOpen handler uses.
            */}
            <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
        
        </Modal>
    );
}

export default OptionModal;