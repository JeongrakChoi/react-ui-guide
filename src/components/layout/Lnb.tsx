import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link, NavLink } from "react-router-dom";

const Lnb = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <nav className="lnb">
            <ul>
                <li>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                </li>
                <li>
                    <NavLink to="/ToggleClass">Toggle Class</NavLink>
                </li>
                <li>
                    <NavLink to="/HoverClass">Hover Class</NavLink>
                </li>
                <li>
                    <NavLink to="/BrowserResize">Resize Event</NavLink>
                </li>
                <li>
                    <NavLink to="/TabMenu">Tab Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/ValueConverter">Value Converter</NavLink>
                </li>
                <li>
                    <NavLink to="/SelectChange">Select Change</NavLink>
                </li>
                <li>
                    <NavLink to="/ButtonComponents">Button Component</NavLink>
                </li>
                <li>
                    <NavLink to="/InputComponents">Input Component</NavLink>
                </li>
                <li>
                    <NavLink to="/ModalComponents">Modal Component</NavLink>
                </li>
                <li>
                    <NavLink to="/SlickSlide">Slider (Slick)</NavLink>
                </li>
                <li>
                    <NavLink to="/SwiperSlider">Slider (Swipe)</NavLink>
                </li>
            </ul>     
        </nav>
    )
}

export default Lnb;