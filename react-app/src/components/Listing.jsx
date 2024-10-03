import React, { useState } from 'react';

function Listing() {
    const images = ['./src/assets/chair1.webp', './src/assets/chair2.webp', './src/assets/chair3.webp', './src/assets/chair4.jpg', './src/assets/chair5.webp'];
    const [imageIndex, setImageIndex] = useState(0) // default image is first index
    const [shownImage, setShownImage] = useState(images[imageIndex]);

    const handleShownImage = (event) => {

        // handle web server requests here when available
        // possibly keep a queue of listings, when reach end of queue send request for more

        if (imageIndex >= images.length - 1)
            setImageIndex(0);
        else
            setImageIndex(imageIndex + 1);
        
        setShownImage(images[imageIndex]);
    }

    return (
        <div className = 'listing-section'>
            <div className = 'listing-image'>
                <img src = {shownImage}></img>
            </div>
            <div className = 'listing-btns'>
                <h2 onClick = {handleShownImage}>NO!</h2>
                <h2 onClick = {handleShownImage}>YES!</h2>
            </div>
        </div>
    );
}

export default Listing;