import React from 'react';

import { HashRouter, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Header from './components/layout/Header';
import Lnb from './components/layout/Lnb';

import ToggleClass from './components/ui/ToggleClass';
import HoverClass from './components/ui/HoverClass';
import BrowserResize from './components/ui/BrowserResize';
import TabMenu from './components/ui/TabMenu';
import ValueConverter from './components/ui/ValueConverter';
import SelectChange from './components/ui/SelectChange'
import ButtonComponents from './components/ui/ButtonComponents'
import SlickSlide from './components/ui/SlickSlide';
import SwiperSlider from './components/ui/SwiperSlider';

import Main from './pages/main/Main';

import './assets/css/_style.scss';

const Layout = () => {
    return (
        <>
            <Header/>
            <Lnb/>
            <Outlet/>
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
            <Route path="/ValueConverter" element={<ValueConverter />}></Route>
            <Route path="/SelectChange" element={<SelectChange />}></Route>
            <Route path="/ButtonComponents" element={<ButtonComponents />}></Route>
            <Route path="/SlickSlide" element={<SlickSlide />}></Route>
            <Route path="/SwiperSlider" element={<SwiperSlider />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;