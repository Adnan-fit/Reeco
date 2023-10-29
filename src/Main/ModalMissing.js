import { Close } from '@mui/icons-material';
import React from 'react';

const ModalMissing = ({ handleModalClose, productName, handleYesClick, handleNoClick, productId }) => {
  return (
    <div className='modalBackDrop'>
      <div className='modalContent'>
        <div className='modalHeader'>
          <span className='modalTitle'>Missing Product</span>
          <span className='closeButton'><Close onClick={handleModalClose} /></span>
        </div>
        <span className='productName'>{productName}</span>
        <div className='yesNoButton'>
          <span className='yes' onClick={() => handleYesClick(productId)}>Yes</span>
          <span className='no' onClick={() => handleNoClick(productId)}>No</span>
        </div>
      </div>
    </div>
  );
};

export default ModalMissing;
