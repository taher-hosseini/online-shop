// src/pages/ProductPageMoreInfo.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPageMoreInfo = () => {
    const { id } = useParams();
    // Fetch product details by id

    return (
        <div>
            <h2>صفحه توضیحات هر محصول</h2>
            <h1>Product Details for ID: {id}</h1>
            {/* Display product details */}
        </div>
    );
};

export default ProductPageMoreInfo;
