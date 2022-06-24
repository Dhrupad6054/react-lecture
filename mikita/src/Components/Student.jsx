import React from 'react';

function Student(props) {
    const studentInfo = props.details;

    // console.log(props);
    return (
        <tr>
            <td>{studentInfo.id}</td>
            <td>{studentInfo.name}</td>
            <td>{studentInfo.email}</td>
            <td>{studentInfo.mobile}</td>
            <td>
                <button className='btn btn-primary'>Edit</button>
                <button className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    )
}

export default Student