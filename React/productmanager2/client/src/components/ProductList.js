
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';
const ProductList = (props) => {
    // const { removeFromDom } = props;
    
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, [])
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }
    return (
        <div>
        {products.map((product, idx) => {
            return(
                <p key={idx}>
                    <Link to={"/products/" + product._id}>
                    {product.title}, {product.price}, {product.description}
                    </Link>
                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                </p>
            )
        })}
        </div>

    )
}

export default ProductList;