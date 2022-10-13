import React from 'react';

import { HashRouter, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/include/Nav';
import Home from './components/ui/Home';
import TabMenu from './components/ui/TabMenu';

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
            <Route path="/home" element={<Home />}></Route>
            <Route path="/TabMenu" element={<TabMenu />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;