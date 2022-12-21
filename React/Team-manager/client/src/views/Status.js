import {Link} from 'react-router-dom';
import {React,useEffect,useState} from 'react'
import PlayerStatus from '../components/PlayerStatus';
import axios from 'axios';
const Status = (props) => {
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
    axios.get('http://localhost:8000/api/players')
        .then(res=>{
            setPlayers(res.data);
            setLoaded(true);
            
        })
        .catch(err => console.error(err));
},[players]);
  return (
    <div>
      <br></br>
        Player Status  :
        <br></br>
        <br></br>
        <PlayerStatus players={players}/>
        
    </div>
  )
}

export default Status
