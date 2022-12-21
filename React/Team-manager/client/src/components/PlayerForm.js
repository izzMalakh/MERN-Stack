import React, { useState } from 'react'
import axios from 'axios';
import { Button,Form,Input,Alert } from 'reactstrap';

export default props => {
    const { initialName,initialPosition, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [position, setPosition] = useState(initialPosition);
    const [er,setEr] = useState("")
    const [er1,setEr1] = useState("")

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, position});
        
    }
    const handleName = (e) =>{
        
        if ( e.target.value.length <3 && e.target.value.length >0){
            setName(e.target.value)
            setEr("thee name should be at least 3 char")
            
        }else{
            setName(e.target.value)
            setEr("")
            
        }
    }
    const handlePosition = (e) =>{
        
        if ( e.target.value.length <3 && e.target.value.length >0){
            setPosition(e.target.value)
            setEr1("the position should be at least 3 char")
            
        }else{
            setPosition(e.target.value)
            setEr1("")
            
        }
    }
 
    return (
        <Form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br/>
                <Input type="text" onChange={handleName} value={name} style={{width:"30%"}}/>
            </p>
            <p style={{color:"red"}}>{er}</p>
            <p>
                <label>Position</label><br/>
                <Input type="text" onChange={handlePosition} value={position} style={{width:"30%"}}/>
            </p>
            <p style={{color:"red"}}>{er1}</p>
           
            <Button color="success">Submit</Button>
            {props.errors.map((err, index) => <p key={index}>{err}</p>)}
        </Form>
        
    )
}

