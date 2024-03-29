import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Info from './components/About/Info';
import Me from './components/About/Me';
import Header from './components/Header';
import Links from './components/Links';
import About from './components/About/About';
import Counter from './components/projects/Counter';
import Calculator from './components/projects/Calc';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Links />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Me />} />
          <Route path='/projects/counter' element={<Counter />} />
          <Route path='/projects/calculator' element={<Calculator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
