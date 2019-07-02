import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Navigation extends Component {
    onNavClick = () => {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(this.onNavClick);
        window.scrollTo (0,currentScroll - (currentScroll/5));
      }
    };
    
    render() {
      const location = this.props.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
      return (
        <aside className='navigation-container mobile-hidden'>
          <nav>
            <ul>
              <li>
                <NavLink exact={true} onClick={this.onNavClick} className={location === 'projects' ? 'links active' : 'links'} activeClassName='active' to='/'>Projects</NavLink>
              </li>
              <li>
                <NavLink exact={true} onClick={this.onNavClick} className='links' activeClassName='active' to='/about'>About</NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      );
    }
}

export default Navigation;
