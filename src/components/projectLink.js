import React, {Component} from 'react';
import {ProjectImage} from './projectImage';
import {Link} from 'react-router-dom';
import {projects} from '../data/projects';

class HomePageLink extends Component {
    state = {
      clicked: false
    };

    handleClick = (e) => {
      if(!this.state.clicked) {
        this.setState({
          clicked: true
        });
      } else {
        e.preventDefault();
      }
    };

    render() {
      return (
        <Link to={projects[this.props.index].link} className={this.props.mouseDown ? 'project-link drag' : 'project-link'}
          onDragStart={(e) => e.preventDefault()}
          onDragEnter={(e) => e.preventDefault()}
          onClick={this.handleClick}>
          <ProjectImage link={this.props.project.link} handleTouchStart={this.props.handleTouchStart} image={this.props.project.url} mouseDown={this.props.mouseDown}/>
        </Link>
      );
    }
}

export default HomePageLink;