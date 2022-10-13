import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import $ from 'jquery';

const Sub = () => {
  const navigate = useNavigate();

  return (
    <div>
      서브페이지
      <div onClick={()=>navigate("/")}>메인페이지 이동</div>
    </div>
  );
};

export default Sub;
