// src/pages/ProductPageMoreInfo.js
import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {ProductContext} from "../contexts/ProductContext";

const ProductPageMoreInfo = () => {
    const { productList } = useContext(ProductContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = productList.find(product => product.id === parseInt(id));
        setProduct(foundProduct);
    }, [id, productList]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='content-item'>
            <Link to={`/product/${product.id}`}>
                <img className='content-img' src={product.images[0]} alt={product.name}/>
            </Link>
            <div className='content-main'>
                <p className='content-main-title'>{product.name}</p>
                <p className='content-main-description'>
                    {(product.description, 50)}{' '}
                    <Link to={`/product/${product.id}`} className="read-more">ادامه مطلب</Link>
                </p>
            </div>
            <div className='flex-md-row flex-lg-column-reverse flex-xl-row content-footer'>
                <button type="submit" className='btn-grad' >خرید</button>
                <div className='content-footer-price'>
                    <span className='content-footer-price-caption'>قیمت</span>
                    <span><span className='me-1'>{product.price.toLocaleString('fa')}</span>تومان</span>
                </div>
            </div>
        </div>
)
    ;
};

export default ProductPageMoreInfo;
