import React, {Component} from 'react';
import SocialNavigation from './socialNavigation';
import AboutMeText from './aboutMeText';
import AboutMeQuote from './aboutMeQuote';

class AboutMe extends Component {
    render() {
        return (
            <section className="main-container">
                <div className="two-column">
                    <AboutMeText/>
                    <SocialNavigation/>
                    <AboutMeQuote/>
                    <a href="mailto:fennadewilde@hotmail.com" className="links button mail">Mail me</a>
                </div>
            </section>
        );
    }
}

export default AboutMe;
