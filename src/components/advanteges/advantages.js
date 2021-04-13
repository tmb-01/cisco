import React from 'react';
import './styles.css';
import Shield from '../../assets/img/Shield_icon.svg'
import Analytics from '../../assets/img/Analytics_icon.svg'
import Settings from '../../assets/img/Settings_icon.svg'
import arrowDown from '../../assets/img/arrowDown.svg'
import { Link } from "react-router-dom";

import { Text } from '../../containers/languages';

const Advantages = () => {
  return(
    <section className="advantages">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="advantage__box">
                <div className="icon">
                  <img src={Shield} alt="Shield" />
                </div>
                <h1 className="advantage__title"><Text tid="advantage__title1" /></h1>
                <h2 className="advantage__desc"><Text tid="advantage__desc1" /></h2>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="advantage__box">
                <div className="icon">
                  <img src={Analytics} alt="Analytics" />
                </div>
                <h1 className="advantage__title"><Text tid="advantage__title2" /></h1>
                <h2 className="advantage__desc"><Text tid="advantage__desc2" /></h2>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="advantage__box">
                <div className="icon">
                  <img src={Settings} alt="Settings" />
                </div>
                <h1 className="advantage__title"><Text tid="advantage__title3" /></h1>
                <h2 className="advantage__desc"><Text tid="advantage__desc3" /></h2>
              </div>
            </div>
          </div>
          <a href="#form" className="arrowDown"><img src={arrowDown} alt="arrowDown" /></a>
        </div>
      </section>
  )
}
export default Advantages;