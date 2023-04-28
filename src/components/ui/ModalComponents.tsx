
import React, { useState, useEffect, useRef } from 'react';

import Button from './../btn/Button';
import Modal from './../modal/Modal';

const ModalComponents = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

    return (
        <div className="container">
            
            <Button className='btn' onClick={openModal}>Modal Open</Button>

            <Modal open={modalOpen} close={closeModal}>
              Modal Popup
            </Modal>

        </div>
    )
}

export default ModalComponents;