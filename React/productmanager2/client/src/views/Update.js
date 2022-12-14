import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';


const Update = (props) => {
    
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, []);
    
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + id, product)
            .then(res => {console.log(res); navigate("/")});
    }
    
    
    return (
        <div>
            <h1>Update a Product!!!!!!!</h1>
            
            {loaded && (
    <ProductForm
        onSubmitProp={updateProduct}
        initialTitle={product.title}
        initialPrice={product.price}
        initialDescription={product.description}

    />
    

)}




      </div>
    )
}
    
export default Update;

