// import React from "react";
import axios from 'axios'
import React, {useState} from 'react'

function GalleryItem ({
    //GET function is passed down to Gallery Item and also photo represents specific object
    fetchGallery,
    photo
}) {
    //ImageFlipped is used to toggle the image description
    const [isImageFlipped, setIsImageFlipped] = useState(true)
    const addLikes =(id) =>{
        axios.put(`/gallery/like/${id}`)
        .then(response =>{

            fetchGallery();
        }).catch(error =>{
            alert('error updating put')
        })
    };
    const flipImage=() =>{


        setIsImageFlipped(!isImageFlipped)
    };
    return (
        <>
       <div className="galleryPhoto" >
           {/* Conditional ran where if it is toggled then show description */}
        {isImageFlipped ?
        <>
        <img width={100} height={100} src={photo.path} onClick={() =>flipImage(photo.id)}></img>
        <p className= "likeBar"><button onClick={() =>addLikes(photo.id)}>Like</button>{photo.likes} people liked this</p>
        </>
        :<>
        <p className= "desc likeBar"onClick={() =>flipImage(photo.id)}>{photo.description}</p>
        <p className= "likeBar"><button onClick={() =>addLikes(photo.id)}><span>Like</span></button>Likes:{photo.likes}</p>
        </>}
        </div>
        
        
        </>
    )





}

export default GalleryItem;