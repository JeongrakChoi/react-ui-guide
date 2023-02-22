import React from 'react';
import { useState } from 'react';

const SelectChange = () => {
    const [index, setIndex] = useState("one");
    const onSelect = (e:any) => {
        setIndex(e.target.value);
    }

    return (
        <div className="container">
            
            <select className='select' value={index} onChange={onSelect}>
                <option value="one">Select One</option>
                <option value="two">Select Two</option>
                <option value="three">Select Three</option>
            </select>

            {index === "one" ? 
                <>
                    <br/><br/>
                    <h2>ONE</h2>
                </>
            : null}

            {index === "two" ? 
                <>
                    <br/><br/>
                    <h2>TWO</h2>
                </>
            : null}

            {index === "three" ? 
                <>
                    <br/><br/>
                    <h2>THREE</h2>
                </>
            : null}
         
        </div>
    )
}

export default SelectChange;