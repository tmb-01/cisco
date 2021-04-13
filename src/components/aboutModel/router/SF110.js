import React, { useState } from 'react'
import {useHistory} from "react-router-dom"
import SF110D from '../../../assets/img/SF110D-08HP_1.png';
import { Text } from '../../../containers/languages';
import {Link} from 'react-router-dom'

const AboutModel = () => {
  
  const history = useHistory();
  const [description, setDescription] = useState(true)
  const [characteristics, setCharacteristics] = useState(true)
  const [features, setFeatures] = useState(true)

  const handleDescription = ()=>{
    setDescription(false)
  }
  const handleCharacteristics = ()=>{
    setCharacteristics(false)
  }
  const handleFeatures = ()=>{
    setFeatures(false)
  }
  return(
    <div className="aboutModel">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-5">
              <div className="text">
                <div className="modelName">Устройство: <span /></div>
                <div className="tab_buttons">
                  <button className="active" onClick={handleDescription} data-tab-open="description">Описание</button>
                  <button data-tab-open="characteristics" onClick={handleCharacteristics} >Характеристики</button>
                  <button data-tab-open="features" onClick={handleFeatures} >Особенности</button>
                </div>
                <div className="tab_contents">
                  <div className="tab_content active" data-tab="description">
                    <div className="modelDesc">
                    Неуправляемые коммутаторы Cisco серии 110 обеспечивают базовое сетевое подключение и надежность для малого бизнеса, что легко для бюджета и без всякой сложности
                    </div>
                    <div className="lines">
                      <div className="line">
                        <div className="half">
                        Стандарты
                        </div>
                        <div className="half">
                        да
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        PoE
                        </div>
                        <div className="half">
                        да
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        Предотвращение блокировки HOL 
                        </div>
                        <div className="half">
                        да
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        Диагностика кабеля
                        </div>
                        <div className="half">
                        да
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab_content" data-tab="characteristics">
                  <div className="modelDesc">
                  Неуправляемые коммутаторы Cisco серии 110 обеспечивают базовое сетевое подключение и надежность для малого бизнеса, что легко для бюджета и без всякой сложности
                    </div>
                    <div className="lines">
                      <div className="line">
                        <div className="half">
                        Стандарты
                        </div>
                        <div className="half">
                        IEEE 802.3 10BASE-T Ethernet, IEEE 802.3 u 100BASE-TX Fast Ethernet, IEEE 802.3 ab 1000BASE-T Gigabit Ethernet, IEEE 802.3 z Gigabit Ethernet, IEEE 802.3 x Flow Control, 802.1 p priority, 802.3 af, Power over Ethernet
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        Светодиодные индикаторы
                        </div>
                        <div className="half">
                        System/PWR, link/activity, 100M,*PoE, *Max PoE, *mini-GBIC(*при наличии)
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        Светодиодные индикаторы
                        </div>
                        <div className="half">
                        1 многофункциональный светодиод
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        Тип кабеля
                        </div>
                        <div className="half">
                        Ethernet Cat5 или лучше
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                          Операционная система
                        </div>
                        <div className="half">
                          Linux
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab_content" data-tab="features">
                    <div className="descs">
                      <div className="li">
                        <span />
                          • Доступная скорость 10/100/1000 Мбит / с даже для самых
                          требовательных к пропускной способности приложений
                      </div>
                      <div className="li">
                        <span />
                          • От 5 до 24-портовых моделей, устанавливаемых
                          на рабочий стол или в стойку
                      </div>
                      <div className="li">
                        <span />
                          • Питание через модели Ethernet для обеспечения питания
                          IP-телефонов, точек доступа и других устройств
                      </div>
                      <div className="li">
                        <span />
                          • Работает прямо из коробки с легкой установкой
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 ml-auto">
              <div className="image">
                <img src={SF110D} alt="SF110D" />
              </div>
              <Link onClick={() => history.push('/pointofsales')} className="buyBtn"><Text tid="modelbuyBtn" /></Link>
            </div>
          </div>
        </div>
      </div>
     
  )
}
//DRY-DO Not Repeat yourself
export default AboutModel;