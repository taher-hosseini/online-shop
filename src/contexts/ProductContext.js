import React, { createContext, useState, useEffect } from 'react';
import products from '../data/products';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState(localStorage.getItem('selectedCategory') || null);

    useEffect(() => {
        if (selectedCategory) {
            localStorage.setItem('selectedCategory', selectedCategory);
        }
    }, [selectedCategory]);

    return (
        <ProductContext.Provider value={{ productList, selectedCategory, setSelectedCategory }}>
            {children}
        </ProductContext.Provider>
    );
};
