import React from 'react';
import {Link} from 'react-router-dom';

// import LogoLight2x from "../../../config/images/logo2x.png";
// import LogoDark2x from "../../../config/images/logo-dark2x.png";

import LogoDark from '@/presentation/config/images/default-dark.png';

const Logo = () => {
  return (
    <Link to={`/dashboard`} className='logo-link'>
      <img className='logo-light logo-img' src={LogoDark} alt='logo' />
    </Link>
  );
};

export default Logo;
