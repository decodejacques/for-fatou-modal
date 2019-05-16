import React, { Component } from 'react'
class App extends Component {
    constructor() {
        super()
        this.state = {
            triggered: false // when true, the modal appears
        }
    }
    render = () => {
        let modal = undefined
        if (this.state.triggered) {
            // modal is reassigned if triggered is true
            // see modal-body in main.css for the css magic that makes a modal appear the way it does
            modal = (<div className='modal-body'>
                <div className="modal-container">
                    modal text
                    <button onClick={this.toggleModal}>close modal</button>
                </div>
            </div>)
        }
        // If modal is undefined, no modal appears
        // Otherwise show the modal
        return (<div>
            {modal}
            initial text
            <button onClick={this.toggleModal}>open modal</button>
        </div>)
    }
    toggleModal = () => {
        this.setState({ triggered: !this.state.triggered })
    }
}
export default App