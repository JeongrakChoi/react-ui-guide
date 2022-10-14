import React from 'react';
import { useEffect, useState } from 'react';

const HoverClass = () => {
    const [isActive, setActive] = useState(false);
    const toggle = () => {
        setActive(!isActive);
    };

    return (
        <div className="uiBox">
            
            <div className={`toggleButton ${isActive ? 'on': ''}`} onMouseEnter={toggle} onMouseLeave={toggle}>
                Mouser Hover
            </div>

        </div>
    )
}

export default HoverClass;