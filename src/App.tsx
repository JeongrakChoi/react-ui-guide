import React from 'react';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './pages/main/Main';
import Sub from './pages/sub/Sub';
import NotFound from './pages/error/NotFound';

import './assets/css/variables.scss';
import './assets/css/global.scss';



const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 공통 레이아웃 포함 */}
          <Route element={<Layout />}>
            <Route path="/" element={<Main />}></Route>
            <Route path="/sub" element={<Sub />}></Route>
          </Route>
          {/* 공통 레이아웃 제외 */}
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;