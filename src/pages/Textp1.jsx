import React from 'react';



const Textp1 = () => {
  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container  text-center">
        <h1
          className="text-center "
          style={{
            fontSize: '96px',
            background: 'linear-gradient(to right, #ff6ec4, #7873f5)', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Hursh choose name
        </h1>
        <p >
          dISCRIPTION HERE
        </p>
        <div className="d-flex justify-content-center gap-3 ">

        
          <button type="button" class="btn btn-outline-danger">mORE ABOUT US</button>
          <button type="button" class="btn btn-outline-primary">TRY</button>

         
        </div>
      </div>
    </div>
  );
};




export default Textp1;