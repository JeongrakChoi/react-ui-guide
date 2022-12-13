import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import $ from 'jquery';


const Main = () => {
    const navigate = useNavigate();

    // useEffect(()=>{
    //   $(document).ready(function(){
    //       alert('hello world');
    //   });
    // }, []);

    return (
        <div className="container">
            @ React Study
        </div>
    );
};

export default Main;
