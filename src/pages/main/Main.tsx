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
    <div className="uiBox">
      @ React UI GUIDE <br/>
      개인 공부용
    </div>
  );
};

export default Main;
