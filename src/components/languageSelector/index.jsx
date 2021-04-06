import React, { useContext, useEffect } from 'react';
import {Button} from "@material-ui/core" 
import './styles.css'

import { languageOptions } from '../../languges/index';
import { LanguageContext } from '../../containers/languages';

const LanguageSelector = () => {
  let { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method.
  const handleLanguageChange = e => userLanguageChange(e.target.value);
  // console.log(handleLanguageChange())
  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem('rcml-lang');
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
      userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);
  console.log(userLanguage)
  
  return (
    <select className="language-selector" onChange={handleLanguageChange} value={userLanguage}>
      {Object.entries(languageOptions).map(([id, name]) => (
        <option className="language-option" key={id} value={id}>{name}</option>
      ))}
    </select>
  )
};

export default LanguageSelector;