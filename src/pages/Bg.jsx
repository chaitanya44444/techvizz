import React from 'react';
import { useLocation } from 'react-router-dom';

const Bg = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;//stckoverflow for the W :sob: didnt have to thinkof it

  let bg;

  if (path === '/' ) {
    bg = '#14142D';
  } else{
    bg = '#14142D';
  } 

  return (
    <section
      style={{
        background: bg,//fml
        minHeight: "100vh",

        color: 'white',

      }}
    >
      {children}
    </section>
  );
};

export default Bg;
