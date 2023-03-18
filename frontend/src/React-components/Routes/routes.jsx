import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import MainPage from '../Pages/MainPage/MainPage';


const AppRoutes = () => {
    return (
        <Routes>
        <Route element={<Layout />}>
        <Route path='/' element={<MainPage />} />
          <Route />
          <Route />
          <Route />
        </Route>
      </Routes>
    );
};

export default AppRoutes;