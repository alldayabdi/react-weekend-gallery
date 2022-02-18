import PropTypes from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios'

function GetGalleryList(){
    axios.get('/gallery').then((response) => {
        console.log('this is the response from getGalleryList', response.data);

      })

      return (
          null
      )
    
}

export default GetGalleryList;
