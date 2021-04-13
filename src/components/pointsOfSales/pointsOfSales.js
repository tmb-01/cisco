import React from 'react';
import './styles.css'
import Close from '../../assets/img/close.svg'
import MediaPark from '../../assets/img/mediapark_logo.svg'
import ArrowRight from '../../assets/img/Arrow_right.svg'
import Texnomart from '../../assets/img/texnomart_logo.svg'
import Olcha from '../../assets/img/olcha_logo.svg'
import {Link, useHistory} from "react-router-dom"

const PointOfSales = () => {
  const history = useHistory();
  return(
    <div className="pointsOfSales">
        <div className="container">
          <button className="closeBtn" onClick={() => history.push('/')}><img src={Close} alt="Close" /></button>
          <h1 className="sectionTitle">Точки продаж</h1>
          <h2 className="sectionSubtitle">Краткая информация о партнерах, распространяющих нашу продукцию</h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div className="box">
                <div className="logo">
                  <img src={MediaPark} alt="MediaPark" />
                </div>
                <Link href="#/">На сайт <img src={ArrowRight} alt="ArrowRight" /></Link>
                <div className="seller">Media park</div>
                <div className="sellerDesc">
                  Интернет магазин бытовой техники
                  и электроники, с доставкой по городу
                  Ташкент и всей Республике Узбекистан
                </div>
                <div className="phone">
                  <h4>Телефон</h4>
                  <h3>+998 (71) 203 73 77</h3>
                </div>
                <div className="phone">
                  <h4>Адрес</h4>
                  <h3>Ташкент, Шайхонтохурский <br />
                    район, ул. Караташ 11</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div className="box">
                <div className="logo">
                  <img src={Texnomart} alt="Texnomart" />
                </div>
                <Link href="#/">На сайт <img src={ArrowRight} alt="ArrowRight" /></Link>
                <div className="seller">Texnomart</div>
                <div className="sellerDesc">
                  Лидирующая сеть розничных магазинов
                  по продаже товаров в рассрочку
                  без процентов по приемлемым ценам
                </div>
                <div className="phone">
                  <h4>Телефон</h4>
                  <h3>+998 (71) 209 99 44</h3>
                </div>
                <div className="phone">
                  <h4>Адрес</h4>
                  <h3>Ташкент, Мирабадский район, <br />
                    ул. Авлиё Ота, м-в Госпитальный 14</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div className="box">
                <div className="logo">
                  <img src={Olcha} alt="Olcha" />
                </div>
                <Link href="#/">На сайт <img src={ArrowRight} alt="ArrowRight" /></Link>
                <div className="seller">Olcha</div>
                <div className="sellerDesc">
                  Современный онлайн-магазин который радует
                  своих клиентов качественной продукцией
                  от ведущих мировых и местных производителей
                </div>
                <div className="phone">
                  <h4>Телефон</h4>
                  <h3>+998 (71) 202 20 21</h3>
                </div>
                <div className="phone">
                  <h4>Адрес</h4>
                  <h3>Ташкент, Мирзо Улугбекский <br />
                    район, ул. Салар Буйи 35А</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div className="box">
                <div className="logo">
                  <img src={MediaPark} alt="MediaPark" />
                </div>
                <Link href="#/">На сайт <img src={ArrowRight} alt="ArrowRight" /></Link>
                <div className="seller">Media park</div>
                <div className="sellerDesc">
                  Интернет магазин бытовой техники
                  и электроники, с доставкой по городу
                  Ташкент и всей Республике Узбекистан
                </div>
                <div className="phone">
                  <h4>Телефон</h4>
                  <h3>+998 (71) 203 73 77</h3>
                </div>
                <div className="phone">
                  <h4>Адрес</h4>
                  <h3>Ташкент, Шайхонтохурский <br />
                    район, ул. Караташ 11</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div className="box">
                <div className="logo">
                  <img src={Texnomart} alt="Texnomart" />
                </div>
                <Link href="#/">На сайт <img src={ArrowRight} alt="ArrowRight" /></Link>
                <div className="seller">Texnomart</div>
                <div className="sellerDesc">
                  Лидирующая сеть розничных магазинов
                  по продаже товаров в рассрочку
                  без процентов по приемлемым ценам
                </div>
                <div className="phone">
                  <h4>Телефон</h4>
                  <h3>+998 (71) 209 99 44</h3>
                </div>
                <div className="phone">
                  <h4>Адрес</h4>
                  <h3>Ташкент, Мирабадский район, <br />
                    ул. Авлиё Ота, м-в Госпитальный 14</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div className="box">
                <div className="logo">
                  <img src={Olcha} alt="Olcha" />
                </div>
                <Link href="#/">На сайт <img src={ArrowRight} alt="ArrowRight" /></Link>
                <div className="seller">Olcha</div>
                <div className="sellerDesc">
                  Современный онлайн-магазин который радует
                  своих клиентов качественной продукцией
                  от ведущих мировых и местных производителей
                </div>
                <div className="phone">
                  <h4>Телефон</h4>
                  <h3>+998 (71) 202 20 21</h3>
                </div>
                <div className="phone">
                  <h4>Адрес</h4>
                  <h3>Ташкент, Мирзо Улугбекский <br />
                    район, ул. Салар Буйи 35А</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default PointOfSales;