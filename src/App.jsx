// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from "./pages/homePage/Home";
import Settings from './pages/settingsPage/Settings';
import Dashboard from './pages/dashboardPage/Dashboard';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
