import PropTypes from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios'
import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList({
    galleryList,
    getGallery
}){
//  let [galleryList, setGalleryList] = useState([]);
    
      return (
         <>
     <ul>
         {galleryList.map(gallery => 
            <GalleryItem key={gallery.id}
             gallery={gallery}
             getGallery ={getGallery}
            />
            
            )}
        </ul> 
        </>
      )
    
}

export default GalleryList;
