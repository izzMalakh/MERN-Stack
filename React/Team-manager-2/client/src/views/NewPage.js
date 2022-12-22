import React from 'react'
import PlayerForm from '../components/PlayerForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const NewPage = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate()

    const createPlayer = player => {
        axios.post('http://localhost:8000/api/player', player)
            .then(res=>{
                setPlayers([...players, res.data]);
                navigate("/")
            })
            .catch(err => {const errorResponse = err.response.data.errors;
              const errorArr = []; 
              for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
              }
              setErrors(errorArr);
            })
    }
  return (
    <div>
      <h1> Favorite Players </h1>
      <p>
          <Link to={"/"}>
            Home
          </Link>
      </p>
      <p> add new player</p>
      <PlayerForm onSubmitProp={createPlayer} initialName="" errors={errors}/> 
    </div>
  )
}

export default NewPage
