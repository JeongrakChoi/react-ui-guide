import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();

    return (
        <nav className="nav">
            <ul>
                <li onClick={()=>navigate("/")}>Home</li>
                <li onClick={()=>navigate("/ToggleClass")}>Toggle Class</li>
                <li onClick={()=>navigate("/HoverClass")}>Hover Class</li>
                <li onClick={()=>navigate("/BrowserResize")}>Resize Event</li>
                <li onClick={()=>navigate("/TabMenu")}>Tab Menu</li>
                <li onClick={()=>navigate("/SlickSlide")}>Slider (Slick)</li>
            </ul>     
        </nav>
    )
}

export default Nav;