import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';
import { Button,Form,Input,Alert } from 'reactstrap';
const Detail = (props) => {
    const [player, setPlayer] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/player/' +id)
            .then(res => setPlayer(res.data))
            .catch(err => console.error(err));
            

    }, []);
    
    return (
        
        <div style={{marginLeft:"10%"}}>
            <h1>name: {player.name}</h1>
            <h2> position: {player.position}</h2>
            
            <p>
            <Link to={"/player/" + player._id + "/edit"}>
    Edit
</Link>

<DeleteButton playerId={player._id} successCallback={() => navigate("/")}/>




            
            
            </p>
        </div>
        
    )
}
    
export default Detail;

