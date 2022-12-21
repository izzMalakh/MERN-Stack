import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';
const Detail = (props) => {
    const [author, setAuthor] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();
    const deletePerson = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' +id)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
            

    }, []);
    
    return (
        
        <div>
            <p>name: {author.name}</p>
            
            <p>
            <Link to={"/author/" + author._id + "/edit"}>
    Edit
</Link>

<p><DeleteButton authorId={author._id} successCallback={() => navigate("/")}/></p>
            
            
            </p>
        </div>
        
    )
}
    
export default Detail;

