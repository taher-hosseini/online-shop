// src/components/ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    return (
        <div>
            <h4>هر باکس محصول در لیست تمام محصولات</h4>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
    );
};

export default ProductItem;
