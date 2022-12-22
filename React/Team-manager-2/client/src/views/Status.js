import {Link, useNavigate} from 'react-router-dom';
import {React,useEffect,useState,useMemo} from 'react'
import PlayerStatus from '../components/PlayerStatus';
import axios from 'axios';
const Status = (props) => {
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [bolean, setBolean] = useState(0);
  const navigate = useNavigate()


  useEffect(()=>{
    axios.get('http://localhost:8000/api/players')
        .then(res=>{
            setPlayers(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
},[bolean]);

const handleClick = (id,player) =>{
  console.log(id)
  if( player.status=="playing" || player.status=="notplaying"){
      const response = axios.put('http://localhost:8000/api/player/' + id, {status:"undecided"})
      bolean==1?setBolean(0):setBolean(1);
  }

}
const handleClick2 = (id,player) =>{
  if( player.status=="notplaying" || player.status=="undecided"){
      const response = axios.put('http://localhost:8000/api/player/' + id, {status:"playing"})
      bolean==1?setBolean(0):setBolean(1);
  }else if(player.status=="playing"){
      const response = axios.put('http://localhost:8000/api/player/' + id, {status:"undecided"}) 
      bolean==1?setBolean(0):setBolean(1);
  }
}
const handleClick3 = (id,player) =>{
  if( player.status=="playing" || player.status=="undecided"){
      const response = axios.put('http://localhost:8000/api/player/' + id, {status:"notplaying"})
      bolean==1?setBolean(0):setBolean(1);
  }else if(player.status=="notplaying"){
      const response = axios.put('http://localhost:8000/api/player/' + id, {status:"undecided"})
      bolean==1?setBolean(0):setBolean(1);
  }
}

  return (
    <div>
      <br></br>
        Player Status  :
        <br></br>
        <br></br>
        <PlayerStatus players={players} handleClick={handleClick} handleClick2={handleClick2}  handleClick3={handleClick3}/>
        
    </div>
  )
}

export default Status
