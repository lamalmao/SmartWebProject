import        React                            from 'react';
import        { BrowserRouter, Route, Routes } from 'react-router-dom';
import                                              './App.css';
import        Layout                           from './React-components/Components/Layout/Layout';
import        MainPage                         from './React-components/Pages/MainPage/MainPage';





function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path='/' element={<MainPage />} />
          <Route />
          <Route />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
