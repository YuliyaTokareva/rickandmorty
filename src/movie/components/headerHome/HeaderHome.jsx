import React from 'react';

import logoImg from '../../../img/logoImg.png';
import './headerHome.scss';

const HeaderHome = () => {
  return <img src={`${logoImg}`} alt="logo" className="logo" />;
};
export default HeaderHome;
