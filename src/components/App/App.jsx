// import React from 'react';
import './App.css';
import React, {useState, useEffect} from 'react'
// import GetGalleryList from '../GalleryList/GalleryList';
import axios from 'axios'



function App() {
   let [galleryList, setGalleryList] = useState([]);
  const getGallery = () => {
    axios({
        method: 'GET',
        url: '/gallery'
    }).then( (response) => {
        console.log('Entire response is', response.data);
        // console.log('Just data', response.data);
        setGalleryList(response.data);
    }).catch((error) => {
        console.log('Error getting list', error);
    })
    
}
useEffect(() =>{
  console.log('in useEffect');
  getGallery();
}, [])
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/>
        <img src="images/lion.jpg"/>
        <img src="images/camel.jpg"/> */}
        {/* <GetGalleryList /> */}
      </div>
    );
}

export default App;
