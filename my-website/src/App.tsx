import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Info from './components/About/Info';
import Me from './components/About/Me';
import Header from './components/Header';
import Links from './components/Links';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Links />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Me />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
