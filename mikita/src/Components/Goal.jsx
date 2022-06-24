import React from 'react';
import Madegoal from './Madegoal';
import Missedgoal from './Missedgoal'


function  Goal(props){
    // console.log(props);

    const isGoal = props.isGoal;
    if(isGoal) {
        return <Madegoal/>
    } else {
        return <Missedgoal/>
    }


    console.log(isGoal);
    return(
        <div>Goal</div>
    )
}

export default Goal