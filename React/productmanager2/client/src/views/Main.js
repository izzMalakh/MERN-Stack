import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';
export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
                console.log("hiiii");
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then(res=>{
                setProducts([...products, res.data]);
            })
    }
    return (
        <div>
          
        <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
           <hr/>
           {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}