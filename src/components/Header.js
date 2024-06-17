// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { BiLogIn } from "react-icons/bi";
import { LuUserPlus } from "react-icons/lu";

const Header = () => {
    return (
        <header className='header'>
            <div className='container header-wrapper'>
                <div className='header-auth-link'>
                    <Link to="/auth/login"><span className='me-2'>ورود</span><BiLogIn /></Link>
                    <Link to="/auth/sign-up"><span className='me-2'>ثبت نام</span><LuUserPlus /></Link>
                </div>
                <div className='header-nav'>
                    <Link to="/">خانه</Link>
                    <Link to="/products">محصولات</Link>
                    <Link to="/about">درباره ما</Link>
                </div>
                <a href="" className='header-address'>
                    <h1>فروشگاه اینترنتی</h1>
                </a>
            </div>

        </header>
    );
};

export default Header;
