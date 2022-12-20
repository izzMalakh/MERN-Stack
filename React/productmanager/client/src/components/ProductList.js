import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deletePerson = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            {props.products.map( (product, i) =>
                <p key={i}>
            <Link to={"/products/" + product._id}>
                {product.title}
            </Link>, {product.price}, {product.description}
            <button onClick={(e)=>{deletePerson(product._id)}}>
                        Delete
                    </button></p>
            
            )}
        </div>
    )
}

export default ProductList;