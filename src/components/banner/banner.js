import React from 'react';
import './styles.css';
import RV160W from '../../assets/img/RV160W-E-K9-G5_1.png';
import WAP125 from '../../assets/img/WAP125-E-K9-EU_1.png';
import SF110D from '../../assets/img/SF110D-08HP_1.png';
import Slider from "react-slick";

import { Text } from '../../containers/languages';
import { Link } from 'react-router-dom';

const Banner = () => {
  const settings =({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },    
    ]
  });
    return(

      <section className="banner">
        <div className="container1" >
        <Slider className="aa" {...settings}>
          <div>
           <img className="banner-img" src={RV160W} alt="RV160W" />
            <h1 className="router_name"><Text tid="router_nameRV160W" /></h1>
          </div>
          <div className="carousel-item">
            <img className="banner-img" src={SF110D} alt="SF110D" />
            <h1 className="router_name"><Text tid="router_nameSF110D" /></h1>
          </div>
          <div className="carousel-item">
            <img className="banner-img" src={WAP125} alt="WAP125" />
            <h1 className="router_name"><Text tid="router_nameWAP125" /></h1>
          </div>
            </Slider>
        <div className="banner-titlebox">
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