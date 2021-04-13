import React, {useState} from 'react'
import './styles.css'
import {useHistory} from "react-router-dom"
import RV160W from '../../assets/img/RV160W-E-K9-G5_1.png'
import {Text} from '../../containers/languages';
import {Link} from 'react-router-dom'

const AboutModel = () => {

    const history = useHistory();
    const description = "description"
    const characteristics = "characteristics"
    const features = "features"
//   const [description, setDescription] = useState(true)
//   const [characteristics, setCharacteristics] = useState(true)
//   const [features, setFeatures] = useState(true)

    const [currentData, setCurrentData] = useState("")

    const handleDescription = () => {
        setCurrentData(description)
    }
    const handleCharacteristics = () => {
//     setCharacteristics(false)
        setCurrentData(characteristics)
    }
    const handleFeatures = () => {
        setCurrentData(features)
    }
    return (
        <div className="aboutModel">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                        <div className="text">
                            <div className="modelName">Устройство: <span/></div>
                            <div className="tab_buttons">
                                <button className="active" onClick={handleDescription}
                                        data-tab-open="description">Описание
                                </button>
                                <button data-tab-open="characteristics" onClick={handleCharacteristics}>Характеристики
                                </button>
                                <button data-tab-open="features" onClick={handleFeatures}>Особенности</button>
                            </div>
                            <div className="tab_contents">
                                <div className={`tab_content ${currentData === description ? "active" : ""}`}>
                                    <div className="modelDesc">
                                        Маршрутизаторы Cisco RV160 и RV160W VPN –
                                        это высокопроизводительные модели, которые
                                        сочетают в себе функции бизнес-класса с безопасностью,
                                        надежностью и общей стоимостью.
                                    </div>
                                    <div className="lines">
                                        <div className="line">
                                            <div className="half">
                                                VPN
                                            </div>
                                            <div className="half">
                                                есть
                                            </div>
                                        </div>
                                        <div className="line">
                                            <div className="half">
                                                Максимальное количество гостей
                                            </div>
                                            <div className="half">
                                                50
                                            </div>
                                        </div>
                                        <div className="line">
                                            <div className="half">
                                                Wi-Fi
                                            </div>
                                            <div className="half">
                                                есть
                                            </div>
                                        </div>
                                        <div className="line">
                                            <div className="half">
                                                LTE
                                            </div>
                                            <div className="half">
                                                есть
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab_content ${currentData === characteristics ? "active" : ""}`}>
                                    <div className="lines">
                                        <div className="line">
                                            <div className="half">
                                                Ethernet WAN
                                            </div>
                                            <div className="half">
                                                1 комбинированный порт
                                                Gigabit Ethernet SFP RJ-45
                                            </div>
                                        </div>
                                        <div className="line">
                                            <div className="half">
                                                Ethernet LAN
                                            </div>
                                            <div className="half">
                                                4 гигабитных порта
                                                Ethernet RJ-45
                                            </div>
                                        </div>
                                        <div className="line">
                                            <div className="half">
                                                Консольный порт
                                            </div>
                                            <div className="half">
                                                1 порт RJ-45
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
                                <div className={`tab_content ${currentData === features ? "active" : ""}`}>
                                    <div className="descs">
                                        <div className="li">
                                            <span/>
                                            RV160 обеспечивает проводное подключение
                                        </div>
                                        <div className="li">
                                            <span/>
                                            RV160W-это беспроводной VPN-маршрутизатор
                                            с беспроводной связью 2x2 802.11 ac
                                        </div>
                                        <div className="li">
                                            <span/>
                                            Гибкие комбинированные WAN-порты SFP/RJ-45
                                        </div>
                                        <div className="li">
                                            <span/>
                                            Родной 4-портовый коммутатор
                                        </div>
                                        <div className="li">
                                            <span/>
                                            Высокопроизводительные гигабитные порты
                                            Ethernet, обеспечивающие передачу больших
                                            файлов и поддержку нескольких пользователей
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 ml-auto">
                        <div className="image">
                            <img src={RV160W} alt="RV160W"/>
                        </div>
                        <Link onClick={() => history.push('/pointofsales')} className="buyBtn"><Text tid="modelbuyBtn"/></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
//DRY-DO Not Repeat yourself
export default AboutModel;
