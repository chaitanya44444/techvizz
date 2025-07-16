import React from 'react';
import { CFooter, CLink } from '@coreui/react';

const Footer = () => {
  return (
    <CFooter
      className="text-white justify-content-between px-4 "
      style={{
      height: '8vh',
      backgroundColor: 'rgb(20, 20, 45)',
      borderTop: '1px solid rgba(0, 240, 255,0.3) ',        
    display: 'flex',
    alignItems: 'center',

    

      }}
    >
      <div>
        <CLink
          className="text-decoration-none"
          style={{
            color: '#00f0ff',
            fontWeight: 'bold',
          }}
        >
          &copy; 2025  Exun
        </CLink>
      </div>
      <div>
        <span >Powered by </span>
        <CLink
          
          className="text-decoration-none"
          style={{
            color: '#00f0ff',
            fontWeight: 'bold',
          }}
        >
          Exun Clan
        </CLink>
      </div>
    </CFooter>
  );
};

export default Footer;