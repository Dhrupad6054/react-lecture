import React, { Component } from 'react'

class Classupdatederived extends Component {
    constructor(props) {
        super(props);
        this.state = { oldName: "MIKITA" };
    }
    static getDerivedStateFromProps(props, state) {
        return {oldName:props.oldName};
    }
    
    changeName = () => {
        // console.log("hello there");
        this.setState({ oldName: "Mahi" });
    }
    render() {
        return (
            <div>
                <button
                    type='button'
                    onClick={this.changeName}>
                    Change Name
                </button>
                <h1>This is {this.state.oldName}</h1>
            </div>
        )
    }
}


export default Classupdatederived