import React from 'react';

const Child = ({todos,setdotos}) => {
    // console.log(todos)
    return (
        <div className='child'>
            <h2>Child Component</h2>
            <ul>
                {
                    Object.keys(todos).map((element)=>(
                        <li>{element} 
                            {
                                (todos[element]=='pending')
                                &&(<button onClick={()=>{setdotos({...todos,[`${element}`]:'complete'})}}>Complete</button>)
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Child