import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class MobileNavigation extends Component {
    state = {
        navOpen: false
    };

    showMobile = (e) => {
        e.preventDefault();
        if (this.state.navOpen) {
            this.setState({
                navOpen: false
            });
        } else {
            this.setState({
                navOpen: true
            });
        }

    };

    closeNav = () => {
        this.setState({
            navOpen: false
        });
    };

    render() {
        const location = this.props.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
        return (
            <div className={this.state.navOpen ? "mobile-navigation open" : "mobile-navigation"}>
                <button onClick={this.showMobile}>
                    <span></span>
                </button>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact={true} onClick={this.closeNav}
                                     className={location === "projects" ? "links active" : "links"}
                                     activeClassName="active" to="/">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink exact={true} onClick={this.closeNav} className="links" activeClassName="active"
                                     to="/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default MobileNavigation;
