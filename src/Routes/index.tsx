import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Screens/About';
import Home from '../Screens/Home';
import Notfound from '../Screens/Notfound';

export const GetRoutes: React.FC = () => {
  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Notfound/>}/>
      </Routes>
  );
}
