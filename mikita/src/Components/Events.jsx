import React from 'react';

function Events() {
    //    function checkData(){
    //         console.log('hello');
    //     }
    // let checkData = () => {
    //     console.log('this is data');
    // }

    // const checkData = (testData) => {
    //     console.log('test')
    // }

    const checkData = (x,y) =>{
        // console.log('Function Called');
        console.log('x');
        // console.log('y');
    }

    return (
        <div>
            {/* <button
                type='button'
                onClick={checkData}
            >Test</button> */}

            {/* <button
                type='button'
                onClick={() => checkData('This is data')}>
                Test</button> */}

            <button
                type='button'
                onClick={(event) => checkData('Test Data', event)}
            >Event Button</button>
        </div>
    );
}


export default Events