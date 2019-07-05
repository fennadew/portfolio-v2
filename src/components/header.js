import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import MobileNavigation from './mobileNav';

class Header extends Component {
  render() {
    return (
      <header>
        <Link className='logo' to='/'><img src={require('../assets/images/logo.svg')} alt='logo'/></Link>
        <Link className='logo-mobile' to='/'><img src={require('../assets/images/logosmall.svg')} alt='logo'/></Link>
        <span className={'header-text'}> A creative front-end developer based in Amsterdam</span>
        <MobileNavigation location={this.props.location}/>
      </header>
    );
  }
}

export default Header;
