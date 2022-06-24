import React, { Component } from 'react'

class Shouldupdate extends Component {
    constructor(props) {
        super(props);
        this.state = {companyName:"Mha Tech"}   
    }
    shouldComponentUpdate (){
        return false;
    }
    changecompanyname = () =>{
        // console.log("mikita");
        this.setState({companyName:"htc"});
    }
    
    render() {
        return (
            <div>
                <h1>hello</h1>
                <p>current company Name is {this.state.companyName}</p>
                <button
                type='button'
                onClick={this.changecompanyname}
                >change name</button>
            </div>
        )
    }
}


export default Shouldupdate