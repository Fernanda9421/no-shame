import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Location from './pages/Location/Location';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Catalog from './pages/Catalog/Catalog';
import NoShameProvider from './context/NoShameProvider';

function App() {
  return (
    <NoShameProvider>
      <NavBar />
        <Routes>
          <Route exact path='/' element={ <Home /> }></Route>
          <Route path='/location' element={ <Location /> }></Route>
          <Route path='/catalog' element={ <Catalog />}></Route>
        </Routes>
      <Footer />
    </NoShameProvider>
  );
}

export default App;
