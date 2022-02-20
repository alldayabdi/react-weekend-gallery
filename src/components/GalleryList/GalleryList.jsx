import PropTypes from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios'
import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList({
    // Pass down get function alongside list 
    galleryList,
    fetchGallery
}){
    
      return (
         <>
     <ul>
         
         {galleryList.map(photo => 
            <GalleryItem
             key={photo.id}
             photo={photo}
             fetchGallery ={fetchGallery}
            />
            
            )}
        </ul> 
        </>
      )
    
}

export default GalleryList;
