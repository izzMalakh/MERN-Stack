import React, { useState } from 'react'
import axios from 'axios';
export default props => {
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
        setName("")
    }
    

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <input type="submit"/>
            {props.errors.map((err, index) => <p key={index}>{err}</p>)}
        </form>
        
    )
}

