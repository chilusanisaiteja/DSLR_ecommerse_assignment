import Header from '../header/Header';
import Pagecontent from '../pagecontent/Pagecontent';
import Footer from '../footer/Footer';
import './Home.css';

import React from 'react'

function Home() {
  return (
    <div className="home">
      <Header/>
      <Pagecontent/>
      <Footer/>
    </div>
  )
}

export default Home
