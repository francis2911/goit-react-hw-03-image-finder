import React from 'react';

import { ImageGalleryItemContainer, ImageGalleryItemImage } from './ImageGalleryItem.styled';

function ImageGalleryItem({ id, url, openModal }) {
    const handleClick = () => {
        openModal(url);
    };

    return (
        <ImageGalleryItemContainer className="image-gallery-item">
            <ImageGalleryItemImage src={url} alt="" onClick={handleClick} />
        </ImageGalleryItemContainer>
    );
}

export default ImageGalleryItem;
