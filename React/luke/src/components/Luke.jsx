import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link,navigate} from '@reach/router';

const Luke = () => {
const[id,setId]=useState("");
const[opt,setOpt]=useState("");
const [responseData, setResponseData] = useState([]); 
const [loaded, setLoaded] = useState(false);

const handleSelect=(e) =>{
    setOpt(e.target.value);
    // console.log(opt)
  }
const handleSubmit=(e)=>{
    e.preventDefault();
    navigate("/"+opt+"/"+id);
}

  return (
    <div>
        <form onSubmit={handleSubmit} style={{marginTop:"20px"}}>
          <label>Search for:</label>
        <select style={{height:"35px",
        width:"150px",
        borderRadius:"7px",
        backgroundColor:"#efefef"}} value={opt} onChange={handleSelect}>
        <option selected="select">select one</option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="starships">StarShips</option>
        </select>
        {/* also we can use : 
        <select value={select} onChange={e => setSelect(e.target.value)}>
    {states.map( (item, idx) => 
                    <option key={idx} value={item}>{item}</option>
                )}
            </select> */}
        <label> ID :</label><input style={{height:"30px",width:"45px",marginRight:"20px",borderRadius:"7px",backgroundColor:"#efefef"}} type="number" onChange={(e)=>setId(e.target.value)}/>
        <button style={{height:"36px",borderRadius:"7px",backgroundColor:"lightblue"}}> Search </button>
        </form>
        
        <div>
            {/* {responseData.map(poke => <p>{poke.name}</p>)} */}
        </div>
    </div>
  )
}

export default Luke