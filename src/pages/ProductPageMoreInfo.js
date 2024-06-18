import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from "../contexts/ProductContext";
import './ProductPageMoreInfo.css';

const ProductPageMoreInfo = () => {
    const { productList } = useContext(ProductContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        const foundProduct = productList.find(product => product.id === parseInt(id));
        setProduct(foundProduct);
        setSelectedImage(foundProduct?.images[0]);
    }, [id, productList]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='row ProductPage-container'>
            <div className='col-12 col-lg-6 ProductPage-right'>
                <div className='ProductPage-content-main'>
                    <p className='ProductPage-content-main-title'>{product.name}</p>
                    <p className='ProductPage-content-main-description'>{product.description}</p>
                </div>
                <div className='ProductPage-content-footer'>
                    <button type="submit" className='btn-grad'>خرید</button>
                    <div className='ProductPage-content-footer-price'>
                        <span className='ProductPage-content-footer-price-caption'>قیمت</span>
                        <span><span className='me-1'>{product.price.toLocaleString('fa')}</span>تومان</span>
                    </div>
                </div>
            </div>
            <div className='col-12 col-lg-6 ProductPage-left'>
                <img className='ProductPage-main-img' src={selectedImage} alt={product.name}/>
                <div className=' ProductPage-thumbnails'>
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            className={`ProductPage-thumbnail ${selectedImage === image ? 'selected' : ''}`}
                            src={image}
                            alt={`thumbnail-${index}`}
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProductPageMoreInfo;
