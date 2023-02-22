import React from 'react';
import { useEffect, useState } from 'react';

const ValueConverter = () => {
    const [isActive, setActive] = useState(false);
    const toggle = () => {
        setActive(!isActive);
    };

    const [amount, setAmount] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const onChange = (e:any) => {
        setAmount(e.target.value)
    }

    const reset = () => {
        setAmount(0)
    }

    const flip = () => {
        setFlipped( (flipped) => !flipped )
        reset();
    }

    return (
        <div className="container">
            
            <h1>Value Converter</h1>

            <br/>
            
            <label htmlFor="minutes">Minutes </label>
            <input 
                id="minutes" 
                className="input"
                value={flipped ? Math.round(amount * 60) : amount} 
                placeholder="Minutes" 
                type="number" 
                onChange={onChange}
                disabled={flipped}
            />

            <br/><br/>

            <label htmlFor="hours">Hours </label>
            <input 
                id="hours" 
                className="input"
                placeholder="Hours" 
                type="number" 
                value={flipped ? amount : Math.round(amount / 60)}
                onChange={onChange}
                disabled={!flipped}
            />

            <br/><br/>

            <button 
                className='btn'
                onClick={flip}
            >
                {flipped ? 'On Minutes' : 'On Hours'}  
            </button>

            &nbsp;
            
            <button 
                className='btn'
                onClick={reset}
            >
                RESET
            </button> 

        </div>
    )
}

export default ValueConverter;