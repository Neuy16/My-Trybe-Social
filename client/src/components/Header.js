import React from 'react';
import 'bulma/css/bulma.css'
import campfire from '../assets/images/campfire.gif'

  const Header = () => {

  return (

    <div className='headerTitle is-flex'>
      <h1>MY TRYBE</h1>
      <img src={campfire} alt="Computer man" className='image is-64x64 mx-4'></img>
    </div>

  );
};

export default Header;
