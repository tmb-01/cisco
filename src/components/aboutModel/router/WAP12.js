import React, { useState } from 'react'
import {useHistory} from "react-router-dom"
import WAP125 from '../../../assets/img/WAP125-E-K9-EU_1.png';
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
                    Двухдиапазонная настольная точка доступа Cisco WAP125 Wireless-AC с PoE обеспечивает простую, экономичную и безопасную беспроводную сеть для ваших сотрудников и гостей, чтобы они могли иметь наилучший опыт оставаться на связи в любом месте офиса
                    </div>
                    <div className="lines">
                      <div className="line">
                        <div className="half">
                        Поддержка VLAN   
                        </div>
                        <div className="half">
                        да
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        IPv6
                        </div>
                        <div className="half">
                        да
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        WPA/WPA2
                        </div>
                        <div className="half">
                        да
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        Обнаружение мошеннических точек доступа
                        </div>
                        <div className="half">
                        да
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab_content" data-tab="characteristics">
                  <div className="modelDesc">
                  Маршрутизаторы Cisco RV160 и RV160W VPN – это высокопроизводительные модели, которые сочетают в себе функции бизнес-класса с безопасностью, надежностью и общей стоимостью.
                    </div>
                    <div className="lines">
                      <div className="line">
                        <div className="half">
                        Стандарты
                        </div>
                        <div className="half">
                        IEEE 802.11 ac, 802.11 n, 802.11 g, 802.11 b, 802.3 af, 802.3 u, 802.1 X, 802.1 Q (VLAN), 802.1 D, 802.11 i, 802.11 e, IPv4/6
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        Антенны
                        </div>
                        <div className="half">
                        Внутренние антенны оптимизированы для установки на рабочий стол
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
                        Категория 5 или лучше
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
                          • Обеспечивает экономичное подключение 802.11 ac/n
                          (частота 2,4 и 5 ГГц), скоростью до 867 Мбит/с
                      </div>
                      <div className="li">
                        <span />
                          • Интерфейс Gigabit Ethernet LAN с питанием через
                          Ethernet (PoE) обеспечивает гибкую установку
                      </div>
                      <div className="li">
                        <span />
                          • Безопасный гостевой Wi-Fi доступ с поддержкой
                          3-х сторонних облачных управляемых гостевых Wi-Fi сервисов
                      </div>
                      <div className="li">
                        <span />
                        • Работает прямо из коробки с легкой установкой
                      </div>
                      <div className="li">
                        <span />
                          • Интеграция Cisco Umbrella для защиты беспроводных
                          устройств от вредоносных программ и фишинга
                      </div>
                      <div className="li">
                        <span />
                          • Поддерживается новой платформой сетевого управления
                          Cisco ® FindIT для легкого управления и контроля
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 ml-auto">
              <div className="image">
                <img src={WAP125} alt="WAP125" />
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