import React from 'react';
import { useLocation } from 'react-router-dom';

const Bg = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;//stckoverflow for the W :sob: didnt have to thinkof it

  let background;

  if (path === '/' ) {
    background = 'radial-gradient(ellipse at top, #FEAD13 20%, #14142D 60%, #ffffff 100%)'; /* for now radient */
  } else{
    background = '#14142D'; 
  } 

  return (
    <section
      style={{
        background: background,
        minHeight: "100vh",

        color: 'white',

      }}
    >
      {children}
    </section>
  );
};

export default Bg;