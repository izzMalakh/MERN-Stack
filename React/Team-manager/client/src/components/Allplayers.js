
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import { Button,Form,Input,Alert } from 'reactstrap';
const PlayerList = (props) => {
    const { removeFromDom } = props;
    const [name,setName]= useState(""); // initial 
    

    return (
        <div>
            <table class="table" style={{width:"300px", marginLeft:"40px"}}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Player</th>
                <th scope="col">Position</th>
                <th scope="col">Actions</th>
                
                
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
                
             </tr>
            </tbody>
          
            
         
          

            )}
            </table>
        </div>
    )
}

export default PlayerList;