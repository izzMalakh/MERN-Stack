import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
                console.log("hiiii");
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }
    
    return (
        <div>
        <h1>Favorite authors</h1>

        
        <Link to={"/new"}>
        add an author
        </Link>
           <hr/>
           <p> We have qutes by: </p>
           {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    )
}