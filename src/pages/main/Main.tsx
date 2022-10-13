import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import $ from 'jquery';

import Nav from '../../components/include/Nav';

const Main = () => {
  const navigate = useNavigate();

  // useEffect(()=>{
  //   $(document).ready(function(){
  //       alert('hello world');
  //   });
  // }, []);

  return (
    <div className="uiBox">
      @ React UI GUIDE
    </div>
  );
};

export default Main;
