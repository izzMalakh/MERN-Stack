import {React,useState,useEffect} from 'react';
import axios from 'axios';

const Luke2 = (props) => {
  const [option,setOption]=useState([])
  const [loaded, setLoaded] = useState(false);
  const [error,setError]=useState("")
  useEffect(() => {
      axios.get(`https://swapi.dev/api/`+props.opt+'/'+props.id)
           .then( response => {setOption(response.data);console.log(response.data)})
           .catch( () => {setError("error");console.log(error)});
           
     
  },[props.id] );


  
              if (error=="error"){
                  return(
                    <>
                    <h1 style={{color:"red"}}>{props.opt} not found try another {props.opt} id</h1>
                    </>
                  )
              }
              
              else if(props.opt=="planets"){
                return (
                  <>
                  <h3>Name :{option.name}</h3> 
                  <p>climate :{option.climate} </p>
                  <p>surface_water :{option.surface_water} </p>
                  <p>population :{option.population} </p>
                  
             
                  </>
                )
              }
                else if(props.opt=="people"){
                  
                    
                    return (
                      <>
                      <h3>Name :{option.name}</h3> 
                      <p>Height :{option.height} cm</p>
                      <p>Mass :{option.mass} kg</p>
                      <p>Hair Color :{option.hair_color}</p>
                      <p>Skin Color :{option.skin_color}</p>
                      </>
                    )
                  
              }else{
                return (
                  <>
                  <h3>Name :{option.name}</h3> 
                  <p>Model :{option.model} </p>
                  <p>manufacturer :{option.manufacturer} </p>
                  <p>passengers :{option.passengers} </p>
                  <p>consumables :{option.consumables} </p>
                  
                  
             
                  </>
                )
              }
            



}

export default Luke2
