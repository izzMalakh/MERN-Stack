import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const PlayerStatus = (props) => {

    const handleClick = (id,player) =>{
        console.log(id)
        if( player.status=="playing" || player.status=="notplaying"){
            const response = axios.put('http://localhost:8000/api/player/' + id, {status:"undecided"}) 

        }

      }
      const handleClick2 = (id,player) =>{
        if( player.status=="notplaying" || player.status=="undecided"){
            const response = axios.put('http://localhost:8000/api/player/' + id, {status:"playing"}) 

        }else if(player.status=="playing"){
            const response = axios.put('http://localhost:8000/api/player/' + id, {status:"undecided"}) 

        }
    }
    const handleClick3 = (id,player) =>{
        if( player.status=="playing" || player.status=="undecided"){
            const response = axios.put('http://localhost:8000/api/player/' + id, {status:"notplaying"}) 

        }else if(player.status=="notplaying"){
            const response = axios.put('http://localhost:8000/api/player/' + id, {status:"undecided"}) 

        }
    }


  return (
    <div>
        <table class="table" style={{width:"300px", marginLeft:"40px"}}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Player</th>
                <th scope="col">Position</th>
                <th scope="col">Actions</th>
                <th></th>
              </tr>
            </thead>
            {props.players.map( (p, i) =>
            <tbody>
              <tr>
                <th></th>
                <td><Link to={"/players/" + p._id}>
                {p.name}
                </Link></td>
                
                <td> {p.position}</td>
                
                {
                    p.status=="playing"?<td><button onClick={(e)=>handleClick2(p._id,p)}  style={{backgroundColor:"green"}}>playing</button></td>:<td> <button onClick={(e)=>handleClick2(p._id,p)} >playing</button> </td>
                }
                {
                    p.status=="notplaying"?<td><button onClick={(e)=>handleClick3(p._id,p)}  style={{backgroundColor:"red"}}>notplaying</button></td>:<td> <button onClick={(e)=>handleClick3(p._id,p)} >notplaying</button> </td>
                }
                {
                    p.status=="undecided"?<td ><button onClick={(e)=>handleClick(p._id,p)}  style={{backgroundColor:"yellow"}}>undecided</button></td>:<td><button onClick={(e)=>handleClick(p._id,p)}>undecided</button></td>
                }
                


             </tr>
            </tbody>
          
            
         
          

            )}
            </table>
        
             
            
       
    </div>
  )
}

export default PlayerStatus