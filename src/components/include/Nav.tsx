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
            </ul>     
        </nav>
    )
}

export default Nav;