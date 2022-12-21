
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const PlayerList = (props) => {
    const { removeFromDom } = props;
    
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
                <td><DeleteButton playerId={p._id} successCallback={()=>removeFromDom(p._id)}/></td>
                <td> 
                <Link class="btn btn-warning" to={"/player/" + p._id + "/edit"}>
                Edit
                </Link>
                </td>
             </tr>
            </tbody>
          
            
         
          

            )}
            </table>
        </div>
    )
}

export default PlayerList;