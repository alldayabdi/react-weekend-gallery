// import React from 'react';
import './App.css';
import React, {useState} from 'react'
import GetGalleryList from '../GalleryList/GalleryList';
import axios from 'axios'



function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/>
        <img src="images/lion.jpg"/>
        <img src="images/camel.jpg"/> */}
        <GetGalleryList />
      </div>
    );
}

export default App;
