import React, { Component } from 'react';
import Car from './Car';

function Garage() {
    const carName = "BMW";

    const carInfo = { name: 'bmw', model: "45252", vehicle_num: "52698566" };

    console.log(carInfo);

    return (
        <div>
            <h2>Garage name is Ntc Service</h2>
            <Car cardetails={carInfo} />
        </div>
    );
}


export default Garage;