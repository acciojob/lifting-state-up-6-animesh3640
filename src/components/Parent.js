import React, { useState } from 'react';
import Child from './Child';
const Parent = () => {
    let [todos,setdotos]=useState({
        'Learn React':'pending',
        'Buid a React app':'pending',
        'Deploy the React app':'pending',
    })
    return (
        <div>
            <h1>Parent Component</h1>
            <Child 
                todos={todos}
                setdotos={setdotos}
            />
        </div>
    )
}

export default Parent