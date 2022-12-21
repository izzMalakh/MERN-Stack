import React from 'react'
import AuthorForm from '../components/AuthorForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const NewPage = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate()

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author', author)
            .then(res=>{
                setAuthors([...authors, res.data]);
                navigate("/")
            })
            .catch(err => {const errorResponse = err.response.data.errors;
              const errorArr = []; 
              for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
              }
              setErrors(errorArr);
            })
    }
  return (
    <div>
      <h1> Favorite Authors </h1>
      <p>
          <Link to={"/"}>
            Home
          </Link>
      </p>
      <p> add new author</p>
      <AuthorForm onSubmitProp={createAuthor} initialName="" errors={errors}/> 
    </div>
  )
}

export default NewPage
