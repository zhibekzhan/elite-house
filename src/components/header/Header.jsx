import React from 'react';
import './Header.css'
import logo from '../../assets/header_assets/logo-elite-house.png'
import lang_switcher from '../../assets/header_assets/play-icon.svg'
import facebook from '../../assets/header_assets/facebook-contacts-icon.svg'
import youtube from '../../assets/header_assets/youtube-contacts-icon.svg'
import instagram from '../../assets/header_assets/instagram-contacts-icon.svg'
import whatsapp from '../../assets/header_assets/wp-contacts-icon.svg'
import nightmode_swithcer from '../../assets/header_assets/night-mode.svg'


const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt="logo" />

      <ul className='nav_menu'>
        <li><a href="#">О нас</a></li>
        <li><a href="#">Объекты</a></li>
        <li><a href="#">Новости</a></li>
        <li><a href="#">Забота о клиентах</a></li>
        <li><a href="#">Оплата</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
      <div className="contacts">
        <div className="lang_changer">
          <p>Ru</p>
          <a href="">
            <img src={lang_switcher} alt="lang_switcher" />
          </a>
        </div>
        <div className="contacts_socialmedia">
          <a href="#"><img src={facebook} alt="facebook" /></a>
          <a href="#"><img src={youtube} alt="youtube" /></a>
          <a href="#"><img src={instagram} alt="instagram" /></a>
          <a href="#"><img src={whatsapp} alt="whatsapp" /></a>
        </div>
        <a href="tel:+996555555555" className='contact_number'>0555 555 555</a>
        <a className='nigthmode' href="">
          <img src={nightmode_swithcer} alt="night-mode-icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;