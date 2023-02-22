import React from 'react';
import { useEffect, useState } from 'react';

const ToggleClass = () => {
    const [isActive, setActive] = useState(false);
    const toggle = () => {
        setActive(!isActive);
    };

    return (
        <div className="container">
            
            <div 
                className={`toggleButton ${isActive ? 'on': ''}`} 
                onClick={toggle}>
                Click
            </div>

        </div>
    )
}

export default ToggleClass;