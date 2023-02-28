import React from 'react';
import { useEffect, useState } from 'react';

import Button from './../btn/Button';

const ButtonComponents = () => {

    return (
        <div className="container">
            
            <Button text="props.text"/>
            <Button text="props.text2"/>

        </div>
    )
}

export default ButtonComponents;