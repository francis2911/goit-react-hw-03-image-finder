import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContainer = styled.div`
  width: calc(100vw - 48px);
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column; 
  justify-content: center; 
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 76px;
  right: 360px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #555;
`;

export const Image = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  margin: auto;
`;
