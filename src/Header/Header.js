import React from 'react';
import { ShoppingCartOutlined } from '@mui/icons-material';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="left-section">
          <h1 className="logo">
            REECO
          </h1>
          <div className="navigation-links">
            <span>Store</span>
            <span>Orders</span>
            <span>Analytics</span>
          </div>
        </div>
        <div className="right-section">
            <ShoppingCartOutlined />
          <span className="profile-name">
            Adnan
          </span>
        </div>
      </div>
      <div className='pageHeader'>
        <div className='lowerHead'>
          <div className='orderRoute'>Orders&nbsp;&gt;&nbsp;<u>Orders&nbsp;324571ABC</u></div>
          <div className='orderHead'>
            <div className='orderNumber'>Orders324571ABC</div>
            <div className='orderButton'>
              <button className='back'>Back</button>
              <button className='approve'>Approve Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
