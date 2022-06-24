import React, { Component } from 'react';

class Componentdidupdate extends Component {
    constructor (props){
        super(props);
        this.state = {username:'mi123'}
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState ({username:'dh256'})
        },5000)
    }
    getSnapshotBeforeUpdate(props,prevstate){
        document.getElementById('div1').innerHTML = `Before update value of username is ${prevstate.username}`;
    }

    componentDidUpdate(){
        document.getElementById('my div').innerHTML = `The updated username is ${this.state.username}`;
    }

    render() {
        return (
            <div>
              <h1>Company user name is {this.state.username}</h1>
              <div id= "div1"></div>
              <div id="my div"></div>  
            </div>
        );
    }
}

export default Componentdidupdate;