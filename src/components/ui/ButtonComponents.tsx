import React from 'react';

import Button from './../btn/Button';

const ButtonComponents = () => {

    return (
        <div className="container">
            
            <Button className='btn' onClick={()=> console.log('click')}>Button Component</Button>

        </div>
    )
}

export default ButtonComponents;