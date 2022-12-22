import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import PlayerForm from '../components/PlayerForm';
import DeleteButton from '../components/DeleteButton';


const Update = (props) => {
    const { id } = useParams();
    const [player, setPlayer] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]); 
    useEffect(() => {
        axios.get('http://localhost:8000/api/player/' + id)
            .then(res => {
                setPlayer(res.data);
                setLoaded(true);
                
            })
            .catch(err => console.log("izzzzzzzzzzzzzzzzzzzzzzzzzzzz"))
    }, []);

    const updatePlayer = player => {
        axios.put('http://localhost:8000/api/player/' + id, player)
            .then(res => {console.log(res);navigate("/") })
            .catch(err => {const errorResponse = err.response.data.errors;
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) {
                  errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
              })
    }
    
    if(player ){
    return (
        <div>
            <h1>Favorite players</h1>
            <p>
                <Link to={"/"}>
                Home
                </Link>
            </p>
            {loaded && player.name!="CastError" ?
    <PlayerForm
        onSubmitProp={updatePlayer}
        initialName={player.name}
        initialPosition={player.position}
        errors={errors}
    />:<p>this is wrong id not found in our data base </p>
}

<DeleteButton  playerId={player._id} successCallback={()=>navigate("/")}/>

      </div>
    )
}
}

    
export default Update;

