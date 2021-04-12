import React, { useState }  from "react";
import './styles.css';
import RV160W from '../../assets/img/RV160W-E-K9-G5_1.png'
import Arrow from '../../assets/img/Arrow_right.svg'
import WAP125 from '../../assets/img/WAP125-E-K9-EU_1.png'
import SG1101 from '../../assets/img/SG110-16HP_2.png'
import SF110D from '../../assets/img/SF110D-08HP_1.png'
import SG110 from '../../assets/img/SG110-16HP_1.png'
import Slider from "react-slick";
import {useHistory} from "react-router-dom"
import AboutModel from "../../components/aboutModel/aboutModel"

import { Text } from '../../containers/languages';

const Model = () => {

  const history = useHistory();
  const [about,setAbout] = useState(false)
  console.log(about)
  const handleAbout = ()=>{
    setAbout(true)
  }
    const settings =({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    });
    return (
      <>
      <div className="models" id="models">
        <h1 className="sectionTitle"><Text tid="modelsectionTitle" /></h1>
        <h2 className="sectionSubtitle"><Text tid="modelsectionSubtitle" /></h2>
        <div className="aaa">
        <Slider className="hello" {...settings}>
        <div className="model-box-main">
          <div className="box">
              <div className="image">
                <img src={RV160W} alt="RV160W" />
              </div>
              <button className="moreBtn" onClick={handleAbout} ><Text tid="modelmoreBtn" /><img src={Arrow} alt="Arrow" /></button>
              <h1 className="modelName">Cisco RV160 VPN</h1>
              <div className="descs">
                <div className="li">
                  <span />
                  <Text tid="modelli1" />
                </div>
                <div className="li">
                  <span />
                  <Text tid="modelli2" />
                </div>
              </div>
              <a href="/pointofsales" onClick={() => history.push('/pointofsales')} className="buyBtn"><Text tid="modelbuyBtn" /></a>
            </div>
            </div>
            <div className="model-box-main">
            <div className="box">
              <div className="image">
                <img src={WAP125} alt="WAP125" />
              </div>
              <button className="moreBtn" onClick={handleAbout}><Text tid="modelmoreBtn" /><img src={Arrow} alt="Arrow" /></button>
              <h1 className="modelName">Cisco WAP 125 Wireless</h1>
              <div className="descs">
                <div className="li">
                  <span />
                  <Text tid="modelli1" />
                </div>
                <div className="li">
                  <span />
                  <Text tid="modelli2" />
                </div>
              </div>
              <a href="/pointofsales" onClick={() => history.push('/pointofsales')} className="buyBtn"><Text tid="modelbuyBtn" /></a>
            </div>
            </div>
            <div className="model-box-main">
            <div className="box">
              <div className="image">
                <img src={SF110D} alt="SF110D" />
              </div>
              <button className="moreBtn" onClick={handleAbout}><Text tid="modelmoreBtn" /><img src={Arrow} alt="Arrow" /></button>
              <h1 className="modelName">Cisco SF 110D</h1>
              <div className="descs">
                <div className="li">
                  <span />
                  <Text tid="modelli1" />
                </div>
                <div className="li">
                  <span />
                  <Text tid="modelli2" />
                </div>
              </div>
              <a href="/pointofsales" onClick={() => history.push('/pointofsales')} className="buyBtn"><Text tid="modelbuyBtn" /></a>
            </div>
            </div>
            <div className="model-box-main">
            <div className="box">
              <div className="image">
                <img src={SG110} alt="SG110" />
              </div>
              <button className="moreBtn" onClick={handleAbout}><Text tid="modelmoreBtn" /><img src={Arrow} alt="Arrow" /></button>
              <h1 className="modelName">Cisco SG 110D</h1>
              <div className="descs">
                <div className="li">
                  <span />
                  <Text tid="modelli1" />
                </div>
                <div className="li">
                  <span />
                  <Text tid="modelli2" />
                </div>
              </div>
              <a href="/pointofsales" onClick={() => history.push('/pointofsales')} className="buyBtn"><Text tid="modelbuyBtn" /></a>
            </div>
            </div>
            <div className="model-box-main">
            <div className="box">
              <div className="image">
                <img src={SG1101} alt="SG1101" />
              </div>
              <button className="moreBtn" onClick={handleAbout}><Text tid="modelmoreBtn" /><img src={Arrow} alt="Arrow" /></button>
              <h1 className="modelName">Cisco SF 110-24</h1>
              <div className="descs">
                <div className="li">
                  <span />
                  <Text tid="modelli1" />
                </div>
                <div className="li">
                  <span />
                  <Text tid="modelli2" />
                </div>
              </div>
              <a href="/pointofsales" onClick={() => history.push('/pointofsales')} className="buyBtn"><Text tid="modelbuyBtn" /></a>
            </div>
            </div>
            </Slider>
            </div>
          
      </div>
      {about?<AboutModel />: null}
      </>
    );
  
}
export default Model;
