import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();

    return (
        <nav className="nav">
            <ul>
                <li onClick={()=>navigate("/home")}>Home</li>
                <li onClick={()=>navigate("/TabMenu")}>Tab Menu</li>
            </ul>     
        </nav>
    )
}

export default Nav;