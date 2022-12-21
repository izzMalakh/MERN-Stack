import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';


const Update = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]); 
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
                
            })
            .catch(err => console.log("izzzzzzzzzzzzzzzzzzzzzzzzzzzz"))
    }, []);

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + id, author)
            .then(res => {console.log(res);navigate("/") })
            .catch(err => {const errorResponse = err.response.data.errors;
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) {
                  errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
              })
    }
    
    if(author ){
    return (
        <div>
            <h1>Favorite authors</h1>
            <p>
                <Link to={"/"}>
                Home
                </Link>
            </p>
            {loaded && author.name!="CastError" ?
    <AuthorForm
        onSubmitProp={updateAuthor}
        initialName={author.name}
        errors={errors}
    />:<p>this is wrong id not found in our data base </p>
}

<DeleteButton authorId={author._id} successCallback={()=>navigate("/")}/>

      </div>
    )
}
}

    
export default Update;

