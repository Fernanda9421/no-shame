import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route exact path='/' element={ <Home /> }></Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
