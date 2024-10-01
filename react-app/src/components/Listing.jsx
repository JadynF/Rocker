import React, { useState } from 'react';

function Listing() {
    const images = ['./src/assets/chair1.webp', './src/assets/chair2.webp'];
    const [shownImage, setShownImage] = useState(images[0]);

    const handleShownImage = (event) => {
        console.log('changed image')
        setShownImage(images[0] == shownImage ? images[1] : images[0]);
    }

    return (
        <div className = 'listing-section'>
            <div className = 'listing-image'>
                <img src = {shownImage}></img>
            </div>
            <div className = 'listing-btns'>
                <h2 onClick = {handleShownImage}>YES!</h2>
                <h2 onClick = {handleShownImage}>NO!</h2>
            </div>
        </div>
    );
}

export default Listing;