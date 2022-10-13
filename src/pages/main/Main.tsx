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
    <div>
      메인 페이지
      <div onClick={()=>navigate("/sub/")}>서브페이지 이동</div>
    </div>
  );
};

export default Main;
