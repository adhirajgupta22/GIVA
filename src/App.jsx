import React from 'react';
import ProductList from './components/List';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ProductForm from './components/Form';
import Navigation from './components/Navbar';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <div className='home'>
    <Navigation />
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<ProductForm/>} />
      </Routes>
    </Router>
    </div>
  </div>
);

export default App;
