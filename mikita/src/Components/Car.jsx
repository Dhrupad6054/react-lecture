import React, { Component } from 'react';

function Car(props) {

    
        return (
            <div>
                <h1>Car Info</h1>       
                <ul>
                    <li>Name: - <b>{props.cardetails.name}</b></li>
                    <li>Model Number: - <b>{props.cardetails.model}</b></li>
                    <li>Vehicle num:- <b>{props.cardetails.vehicle_num}</b></li>
                   
                </ul>         
            </div>
        );
    }


export default Car;