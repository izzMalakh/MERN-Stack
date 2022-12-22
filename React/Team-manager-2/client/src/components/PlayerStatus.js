import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const PlayerStatus = (props) => {
    const navigate = useNavigate();



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
                    p.status=="playing"?<td><button onClick={(e)=>props.handleClick2(p._id,p)}  style={{backgroundColor:"green"}}>playing</button></td>:<td> <button onClick={(e)=>props.handleClick2(p._id,p)} >playing</button> </td>
                }
                {
                    p.status=="notplaying"?<td><button onClick={(e)=>props.handleClick3(p._id,p)}  style={{backgroundColor:"red"}}>notplaying</button></td>:<td> <button onClick={(e)=>props.handleClick3(p._id,p)} >notplaying</button> </td>
                }
                {
                    p.status=="undecided"?<td ><button onClick={(e)=>props.handleClick(p._id,p)}  style={{backgroundColor:"yellow"}}>undecided</button></td>:<td><button onClick={(e)=>props.handleClick(p._id,p)}>undecided</button></td>
                }

             </tr>
            </tbody>
            )}
            </table>
        
             
            
       
    </div>
  )
}

export default PlayerStatus