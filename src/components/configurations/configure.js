import React from 'react';
import './styles.css';
import Configuration1 from '../../assets/img/configuration_1.png'
import Configuration2 from '../../assets/img/configuration_2.png'

import { Text } from '../../containers/languages';

const Configurations = () => {
  return(
    <section className="configurations" id="forYourBusiness">
        <div className="container">
          <div className="row">
            <div className="configuration-content">
              <div className="desc">
                <div className="conf-title">
                  <h1 className="sectionTitle"><Text tid="sectionTitle1" /></h1>
                  <h2 className="sectionSubtitle">
                    <Text tid="sectionSubtitle1" />
                  </h2>
                </div>
                <div className="list">
                  <div className="conf-list">
                  <div className="li">
                    <h3 className="listTitle"><Text tid="listTitle1" /></h3>
                    <p className="listDesc">
                    <Text tid="listDesc1" />
                    </p>
                  </div>
                  <div className="li">
                    <h3 className="listTitle"><Text tid="listTitle2" /></h3>
                    <p className="listDesc">
                    <Text tid="listDesc2" />
                    </p>
                  </div>
                  <div className="li">
                    <h3 className="listTitle"><Text tid="listTitle3" /></h3>
                    <p className="listDesc">
                    <Text tid="listDesc3" />
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-sm-2 d-flex align-items-end">
                  <div className="image">
                    <img src={Configuration1} alt="Configuration1" />
                  </div>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="configuration-content">
              <div className="desc">
              <div className="conf-title">
                <h1 className="sectionTitle"><Text tid="sectionTitle2" /></h1>
                <h2 className="sectionSubtitle">
                <Text tid="sectionSubtitle2" />
                </h2>
                </div>
                <div className="list">
                <div className="conf-list">
                  <div className="li">
                    <h3 className="listTitle"><Text tid="listTitle4" /></h3>
                    <p className="listDesc">
                    <Text tid="listDesc4" />
                    </p>
                  </div>
                  <div className="li">
                    <h3 className="listTitle"><Text tid="listTitle5" /></h3>
                    <p className="listDesc">
                    <Text tid="listDesc5" />
                    </p>
                  </div>
                  <div className="li">
                    <h3 className="listTitle"><Text tid="listTitle6" /></h3>
                    <p className="listDesc">
                    <Text tid="listDesc6" />
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-sm-4 d-flex align-items-center">
                <div className="image">
                <img src={Configuration2} alt="Configuration2" />
                  </div>
                </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </section>
  )
}
export default Configurations;