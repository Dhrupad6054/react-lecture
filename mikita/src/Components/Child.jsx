import React, { Component } from 'react';

class Child extends Component {
componentWillUnmount(){
    alert('the component removed from DOM');
}

    render() {
        return (
            <div>
                <p>This is child component</p>
            </div>
        );
    }
}

export default Child;