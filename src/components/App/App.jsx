// import React from 'react';
import './App.css';
import React, {useState, useEffect} from 'react'
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios'



function App() {
   let [galleryList, setGalleryList] = useState([]);
  const fetchGallery = () => {
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
  fetchGallery();
}, [])
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList
        galleryList= {galleryList} 
        fetchGallery = {fetchGallery}
        />
      </div>
    );
}

export default App;
