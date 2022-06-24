import React from 'react';
import Student from './Student';

function  School(){

    const Students = [
        {id:1, name: 'mikita', email:'m@gmail.com', mobile: 859632565},
        {id:2, name: 'mikita', email:'m@gmail.com', mobile: 859632565},
        {id:3, name: 'mikita', email:'m@gmail.com', mobile: 859632565},
        {id:4, name: 'mikita', email:'m@gmail.com', mobile: 859632565},
        {id:5, name: 'mikita', email:'m@gmail.com', mobile: 859632565},
        {id:6, name: 'mikita', email:'m@gmail.com', mobile: 859632565},
    ];

    console.log(Student);
    return(
        <div className='container'>
            <h1 className='text-center text-primary'>List of Students</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
               <tbody>
               {Students.map((student) => <Student key={student.id} details={student.name}/>)}
               </tbody>
            </table>
        </div>
    )
}

export default School