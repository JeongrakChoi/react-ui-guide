import React from 'react';

import { HashRouter, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/include/Nav';

import ToggleClass from './components/ui/ToggleClass';
import HoverClass from './components/ui/HoverClass';
import BrowserResize from './components/ui/BrowserResize'
import TabMenu from './components/ui/TabMenu'
import SlickSlide from './components/ui/SlickSlide';
import SwiperSlider from './components/ui/SwiperSlider';

import Main from './pages/main/Main';

import './assets/css/style.scss';

const Layout = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <Nav/>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* 공통 레이아웃 포함 */}
          <Route element={<Layout />}>
            <Route path="/" element={<Main />}></Route>
            <Route path="/ToggleClass" element={<ToggleClass />}></Route>
            <Route path="/HoverClass" element={<HoverClass />}></Route>
            <Route path="/BrowserResize" element={<BrowserResize />}></Route>
            <Route path="/TabMenu" element={<TabMenu />}></Route>
            <Route path="/SlickSlide" element={<SlickSlide />}></Route>
            <Route path="/SwiperSlider" element={<SwiperSlider />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;