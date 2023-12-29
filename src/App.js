import React, { useState } from 'react';
import Modal from 'react-modal';
import SegmentPopup from './components/SegmentPopup';
import './App.css';

Modal.setAppElement('#root');

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSaveSegment = (data) => {
    // Implement your logic to send data to the server here
    console.log(data);
    closeModal();
  };

  return (
    <div className="App">
      <button onClick={openModal}>Save Segment</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <SegmentPopup onSaveSegment={handleSaveSegment} />
      </Modal>
    </div>
  );
};

export default App;

