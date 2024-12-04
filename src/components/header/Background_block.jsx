import React from 'react';
import './Background_block.css'
import background_photo from '../../assets/header_assets/background.png'
import sumbit_btn from '../../assets/header_assets/submut-btn.png'


const Background_block = () => {
  return (
    <div>
      <div className='bc_photo'>
        <img src={background_photo} alt='background-fasad-photo' />
      </div>
      <a href="#" className="submit_btn">
        <img className='submit_icon' src={sumbit_btn} alt="submit-btn-icon" />
        <span className='submit_text'>Оставить заявку</span>
      </a>

    </div>
  );
};

export default Background_block;