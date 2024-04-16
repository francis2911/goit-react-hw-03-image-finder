import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { Overlay, ModalContainer, CloseButton, Image } from './Modal.styled';



function Modal({ isOpen, imageUrl, altText, onClose }) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 27 && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleOverlayClick = () => {
        onClose();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            {isOpen && (
                <Overlay className="overlay" onClick={handleOverlayClick}>
                    <ModalContainer className="modal" onClick={handleModalClick}>
                        <Image src={imageUrl} alt={altText} />
                        <CloseButton onClick={onClose}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </CloseButton>
                    </ModalContainer>
                </Overlay>
            )}
        </>
    );
}

export default Modal;
