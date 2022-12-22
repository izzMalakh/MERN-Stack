import React, { useEffect, useState } from 'react';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
                console.log("hiiii");
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id != playerId));
    }
    
    return (
        <div style={{margin:"100px"}}>
        <h1>Favorite players</h1>
        <Link to={"/status"}>
        Manage Status
        </Link>
        <br></br>
        
        <Link to={"/new"}>
        Add an player
        </Link>
           <hr style={{ width:"30%" }}/>
           
           <Link to={"/status"}>Status</Link>
           {loaded && <PlayerList players={players} removeFromDom={removeFromDom}/>}
           <hr style={{ width:"30%" }}/>
        </div>
    )
}