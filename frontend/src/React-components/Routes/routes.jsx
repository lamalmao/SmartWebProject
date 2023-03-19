import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import MainPage from '../Pages/MainPage/MainPage';
import QuizSelectPage from '../Pages/QuizSelectPage/QuizSelectPage';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';
import EditQuizPage from '../Pages/EditQuizPage/EditQuizPage';
import CrosswordPage from '../Pages/CrosswordPage/CrosswordPage';
import PointGamePage from '../Pages/PointGamePage/PointGamePage';
import WordGamePage from '../Pages/WordGamePage/WordGamePage';


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/quizselect' element={<QuizSelectPage />} />
        <Route path='/account' element={<ProfilePage />} />
        <Route path='/edit' element={<EditQuizPage />} />
        <Route path='/crossword' element={<CrosswordPage />} />
        <Route path='/point' element={<PointGamePage />} />
        <Route path='/word' element={<WordGamePage />} />
        <Route />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
