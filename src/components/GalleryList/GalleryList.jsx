import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import axios from 'axios'
import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList({
    // Pass down get function alongside list 
    galleryList,
    fetchGallery
}){
    
      return (
         <>
     <ul>
         {/* Loop through galleryList prop to pass down specific object to 
         Gallery item and still pass down get function */}
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
