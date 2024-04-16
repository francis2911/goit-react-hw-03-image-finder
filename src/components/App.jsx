import React, { useState } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';
import { fetchImages } from '../api';

import { AppContainer } from './App.styled';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [selectedImageAlt, setSelectedImageAlt] = useState('');

  const handleSearch = async (term) => {
    setSearchTerm(term);
    setPage(1);
    setLoading(true);
    const newImages = await fetchImages(term);
    setLoading(false);
    setImages(newImages);
  };

  const loadMoreImages = async () => {
    setPage(page + 1);
    setLoading(true);
    const newImages = await fetchImages(searchTerm, page + 1);
    setLoading(false);
    setImages([...images, ...newImages]);
  };

  const openModal = (imageUrl, altText) => {
    setSelectedImageUrl(imageUrl);
    setSelectedImageAlt(altText);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImageUrl('');
    setSelectedImageAlt('');
  };

  return (
    <AppContainer className="App">
      <Searchbar onSubmit={handleSearch} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <ImageGallery images={images} openModal={openModal} />
          <Button onClick={loadMoreImages} hasImages={images.length > 0} />
          <Modal isOpen={modalOpen} imageUrl={selectedImageUrl} altText={selectedImageAlt} onClose={closeModal} />
        </>
      )}
    </AppContainer>
  );
}

export default App;
