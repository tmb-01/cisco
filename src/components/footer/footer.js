import React from 'react';
import './styles.css'
import FooterBg from '../../assets/img/footer_bg.png'

import { Text } from '../../containers/languages';

const Footer = () => {
  return(
    <footer id="footer">
    <div className="bg_image">
      <img src={FooterBg} alt="FooterBg" />
    </div>
    <div className="infos">
      <div className="footer-row">
        <div className="half">
          <h4 className="footer-subtitle"><Text tid="footer-subtitle-address" /></h4>
          <h3 className="footer-p">Tashkent Bunyodkor str, 42/1</h3>
        </div>
        <div className="half">
          <h4 className="footer-subtitle"><Text tid="footer-subtitle-email" /></h4>
          <h3 className="footer-p"><a href="mailto:cisco@abrisdc.com">cisco@abrisdc.com</a></h3>
        </div>
      </div>
      <div className="footer-row">
        <div className="half">
          <h4 className="footer-subtitle"><Text tid="footer-subtitle-office" /></h4>
          <h3 className="footer-p"><a href="tel:+998 (71) 276 47 46">+998 (71) 276 47 46</a></h3>
        </div>
        <div className="half">
          <h4 className="footer-subtitle"><Text tid="footer-subtitle-service" /></h4>
          <h3 className="footer-p"><a href="tel:+998 (71) 276 33 33">+998 (71) 276 33 33</a></h3>
        </div>
      </div>
    </div>
  </footer>
  )
}
export default Footer;