import React from 'react';

const Navbar = () => {
  return (
    <div  style={{
        position: 'fixed',   
        top: '10px',   
        margin: '1%',
        width:'98%',
        borderRadius: '20px',
        backgroundColor: 'rgba(20, 20, 45, 0.7)',
        border: '3px solid rgba(0, 240, 255, 0.2)',
        padding: '10px 20px',// looks good(i tryna copy something ayon did)

      }}
      
    >
      <nav className="d-flex justify-content-between align-items-center w-100">
        <div >
          <a
            style={{
              color: '#00f0ff',// makes it look like its magical ngl(azure is best colour type)
              fontWeight: 'bold',
              fontSize: '24px',
              textDecoration: 'none',

            }}
            href="/"
          >
            Hursh name app?
          </a>
        </div>

        <div className="d-flex align-items-center">
          <a href="/" className="a1">Home</a>
          <a href="/About" className="a1">Features</a>
          <a href="/Try" className="a1">Try our bot</a>
          <a href="/Results" className="a1">Results so far by us</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
