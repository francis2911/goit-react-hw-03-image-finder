
import React from 'react';

import { ImageGalleryContainer } from './ImageGallery.styled';

function ImageGallery({ images, openModal }) {
    return (
        <ImageGalleryContainer className="image-gallery">
            {images.map((image) => (
                <div className="image-wrapper" key={image.id} onClick={() => openModal(image.largeImageURL, image.altText)}>
                    <img src={image.webformatURL} alt={image.altText} />
                </div>
            ))}
        </ImageGalleryContainer>
    );
}

export default ImageGallery;
