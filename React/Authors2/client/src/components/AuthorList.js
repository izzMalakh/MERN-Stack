
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const { removeFromDom } = props;
    
    return (
        <div>
            <table class="table" style={{width:"300px"}}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Author</th>
                <th scope="col">Actions</th>
                <th></th>
              </tr>
            </thead>
            {props.authors.map( (p, i) =>
            <tbody>
              <tr>
                <th></th>
                <td><Link to={"/authors/" + p._id}>
                {p.name}
                </Link></td>
                <td><DeleteButton authorId={p._id} successCallback={()=>removeFromDom(p._id)}/></td>
                <td> 
                <Link to={"/author/" + p._id + "/edit"}>
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

export default AuthorList;