import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home/index';
import Category from '../../Pages/Category/index';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:categoryId' element={<Category />} />
    </Routes>
  )
}

export default AppRoutes;