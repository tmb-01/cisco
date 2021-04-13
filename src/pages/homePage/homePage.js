import React from 'react'
import Navbar from '../../components/navbar/navbar'
import TopPattern from '../../components/topPattern/topPattern'
import Banner from '../../components/banner/banner'
import Advantages from  '../../components/advanteges/advantages'
import Configurations from '../../components/configurations/configure'
import Models from '../../components/models/models'
import AboutModel from '../../components/aboutModel/aboutModel'
import Form from '../../components/form/form'
import Footer from '../../components/footer/footer'


const homePage = () => {
  return (
    <div>
      <Navbar />
      <TopPattern />
      <Banner />
      <Advantages />
      <Configurations />
      <Models >
        <AboutModel />
      </Models>
      <Form />
      <Footer />
    </div>
    
  )
}
export default homePage;