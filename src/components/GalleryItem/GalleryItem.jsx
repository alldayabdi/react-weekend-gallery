import React from "react";
import axios from 'axios'

function GalleryItem ({
    fetchGallery,
    photo
}) {
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
        <img src ={photo.path} />
        
        </>
    )





}

export default GalleryItem;