import React from 'react';
import './styles.css';
import RV160W from '../../assets/img/RV160W-E-K9-G5_1.png';
import WAP125 from '../../assets/img/WAP125-E-K9-EU_1.png';
import SF110D from '../../assets/img/SF110D-08HP_1.png';
import SG1101 from '../../assets/img/SG110-16HP_1.png';
import SG110 from '../../assets/img/SG110-16HP_2.png';

import { Text } from '../../containers/languages';

const Banner = () => {
 
    return(

      <section className="banner">
        <div className="container" >
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="banner-img" src={RV160W} alt="RV160W" />
            <h1 className="router_name"><Text tid="router_nameRV160" /></h1>
          </div>
          <div className="carousel-item">
            <img className="banner-img" src={WAP125} alt="WAP125" />
            <h1 className="router_name"><Text tid="router_nameWAP125" /></h1>
          </div>
          <div className="carousel-item">
            <img className="banner-img" src={SF110D} alt="SF110D" />
            <h1 className="router_name"><Text tid="router_nameSF110D" /></h1>
          </div>
          <div className="carousel-item">
            <img className="banner-img" src={SG1101} alt="SG110" />
            <h1 className="router_name"><Text tid="router_nameSG110D" /></h1>
          </div>
          <div className="carousel-item">
            <img className="banner-img" src={SG110} alt="SG110" />
            <h1 className="router_name"><Text tid="router_nameSF110-24" /></h1>
          </div>
          </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
        <div className="desc">
          <h1 className="banner_title"><Text tid="banner_title" /></h1>
          <h3 className="banner_subtitle">
            <Text tid="banner_subtitle" />
          </h3>
          <a href="https://www.cisco.com/c/en/us/products/switches/110-series-unmanaged-switches/models-comparison.html"><Text tid="banner_btn" /></a>
        </div>
      </div>
    </section>

    
  )
  
}
export default Banner;