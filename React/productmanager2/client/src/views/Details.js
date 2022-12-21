import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();
    const deletePerson = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
            

    }, []);
    
    return (
        
        <div>
            <p>title: {product.title}</p>
            <p>price: {product.price}</p>
            <p>description: {product.description}</p>
            <p>
            <Link to={"/product/" + product._id + "/edit"}>
    Edit
</Link>

<p><DeleteButton productId={product._id} successCallback={() => navigate("/")}/></p>
            
            
            </p>
        </div>
        
    )
}
    
export default Detail;

