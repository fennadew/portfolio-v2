import React, {Component} from 'react';
import {TransitionGroup, Transition} from 'react-transition-group';
import { TweenMax } from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
import {projects} from '../data/projects';
import {Link} from 'react-router-dom';
import {SplitText} from '../vendor/SplitText';

// eslint-disable-next-line no-unused-vars
const C = CSSPlugin;

class TitleContainer extends Component {
  state = {  }

  render() { 
    return ( 
      <Link to={projects[this.props.index].link} className='title-container'>
        <span className='circle'>0</span><span>{this.props.index + 1}</span>
        <hr/>
        <span className='circle total'>0</span><span className='number'>{projects.length}</span>
        
        <TransitionGroup className='title'>
          <Transition
            key={this.props.title}
            timeout={900}
            mountOnEnter={true}
            unmountOnExit={true}
            onEnter={node => {
              let splitText = new SplitText(node);
              let chars = splitText.chars;

              TweenMax.staggerFromTo(chars, 0.3, {opacity:0, y:100, delay:1}, {opacity:1, y:0, delay: 0.3}, 0.01);

            }}
            onExit={node => {
              let splitText = new SplitText(node);
              let chars = splitText.chars;

              TweenMax.to(node, 0, {position: 'absolute', top: 0});
              TweenMax.staggerFromTo(chars, 0.3, {top: 0, opacity:1, y:0}, {opacity:0, y:100}, 0.01);
            }}
          >
            <h2>{this.props.title}</h2>
          </Transition>
        </TransitionGroup>
      </Link>
    );
  }
}
 
export default TitleContainer;
