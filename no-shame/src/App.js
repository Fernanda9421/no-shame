import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Location from './pages/Location/Location';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route exact path='/' element={ <Home /> }></Route>
          <Route path='/location' element={ <Location /> }></Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
