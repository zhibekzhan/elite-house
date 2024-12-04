import React from 'react';
import './App.css'
import Header from './components/header/Header';
import Background_block from './components/header/Background_block';
import AboutUs from './components/aboutUS/AboutUs';


const App = () => {
  return (
    <div className='box'>
      <Header/>
      <Background_block/>
      <AboutUs/>
    </div>
  );
};

export default App;