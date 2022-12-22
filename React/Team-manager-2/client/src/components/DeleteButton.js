import React from 'react'
import axios from 'axios';
import {Button} from 'reactstrap';
export default props => {
    
    const { playerId, successCallback } = props;
    
    const deletePlayer = e => {
        var result= window.confirm(" Are you sure you want to delete it? ")
        if(result==true){
        axios.delete('http://localhost:8000/api/player/' + playerId)
            .then(res=>{
                successCallback();
            })
        }
    }
    
    return (
        <Button color="danger" onClick={deletePlayer}>
            Delete
        </Button>
    )
}