import React, {Component} from 'react';

import HomePageAbout from './homepageAbout';
import DragBar from './dragBar';
import DragContainer from './dragContainer';
import {projects} from '../data/projects';


let timeOut;
let timeOutScroll;

function findProject(location) {
  if (location.length > 0) {
    const project = projects.find(p => p.link === '/projects/' + location);
    return project.id;
  } else {
    return 0;
  }
}

class HomePage extends Component {
    state = {
      projectIndex: findProject(this.props.current),
      startIndex: 0,
      startPosition: 0,
      mouseDown: false,
      dragBarMoving: false,
      numberOfProjects: projects.length,
      pixelsPerProject: 0,
      transform: 0,
      startTransform: 0,
      dragContainerWidth: 0,
      scrolling: false,
      device: '',
      dragBar: true,
      time: this.props.current.length > 0 ? 1000 : 0
    };

    UNSAFE_componentWillMount() {
      timeOutScroll = setTimeout(() => {
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('wheel', this.findScrollDirectionBrowsers);
      }, this.state.time);
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
      document.removeEventListener('wheel', this.findScrollDirectionBrowsers);
      if (timeOut) {
        clearTimeout(timeOut);
      }
      if (timeOutScroll) {
        clearTimeout(timeOutScroll);
      }
    }


    findScrollDirectionBrowsers = (e) => {
      if (!this.state.scrolling) {
        let delta;
        let newIndex;
        if (e.wheelDelta) {
          delta = e.wheelDelta;
        } else {
          delta = -1 * e.deltaY;
        }
        if (delta < 0) {
          newIndex = this.state.projectIndex < (projects.length - 1) ? this.state.projectIndex + 1 : projects.length - 1;
        } else if (delta > 0) {
          newIndex = this.state.projectIndex > 0 ? this.state.projectIndex - 1 : 0;
        }
        this.setState({
          scrolling: true,
          projectIndex: newIndex,
          transform: this.state.pixelsPerProject * newIndex
        });

        timeOut = setTimeout(() => {
          this.setState({
            scrolling: false,
          });
        }, 800);
      }
    };

    handleKeyDown = (e) => {
      switch (e.which) {
      case 37: {
        let newProjectIndexLeft = this.state.projectIndex - 1;
        if (newProjectIndexLeft < 0) {
          newProjectIndexLeft = 0;
        }
        this.setState({
          projectIndex: newProjectIndexLeft,
          transform: this.state.pixelsPerProject * newProjectIndexLeft
        });
        break;
      }
      case 39: {
        let newProjectIndexRight = this.state.projectIndex + 1;
        if (newProjectIndexRight > projects.length - 1) {
          newProjectIndexRight = projects.length - 1;
        }
        this.setState({
          projectIndex: newProjectIndexRight,
          transform: this.state.pixelsPerProject * newProjectIndexRight
        });
        break;
      }
      default:
        return;
      }
      e.preventDefault();
    };


    updateDimensions = (width) => {
      const newDimensions = width / projects.length;
      this.setState({
        dragContainerWidth: width,
        pixelsPerProject: newDimensions,
        transform: newDimensions * this.state.projectIndex
      });
    }

    handleDragStart = (e) => {
      const startIndex = this.state.projectIndex;
      const startTransform = this.state.transform;
      this.setState({
        mouseDown: true,
        startPosition: e.pageX,
        startIndex,
        startTransform,
        device: 'laptop'
      });
    };

    handleTouchStart = (e, element) => {
      const startIndex = this.state.projectIndex;
      const startTransform = this.state.transform;
      this.setState({
        mouseDown: true,
        startPosition: typeof e === 'object' ? e.touches[0].pageX : undefined,
        startIndex,
        startTransform,
        device: 'mobile',
        dragBar: element
      });
    };

    detectionDragOrSwipe(e) {
      if (this.state.dragBar) {
        this.handleDragMove(e);
      } else {
        this.handleSwipeMove(e);
      }
    }


    handleSwipeMove = (e) => {
      e.preventDefault();
      if(e.touches) {
        if (!this.state.scrolling) {
          let startPosition = this.state.startPosition;
          let newIndex;
          if (startPosition > e.touches[0].pageX) {
            newIndex = this.state.projectIndex < (projects.length - 1) ? this.state.projectIndex + 1 : projects.length - 1;
          } else if (startPosition < e.touches[0].pageX) {
            newIndex = this.state.projectIndex > 0 ? this.state.projectIndex - 1 : 0;
          } else {
            newIndex = this.state.projectIndex;
          }
          this.setState({
            scrolling: true,
            projectIndex: newIndex,
            transform: this.state.pixelsPerProject * newIndex
          });

          timeOut = setTimeout(() => {
            this.setState({
              scrolling: false,
            });
          }, 800);
        }
      }
    };

    handleDragMove = (e) => {
      let position;
      if (this.state.device === 'mobile') {
        if(typeof e === 'object') {
          position = e.touches[0].pageX;
        } else {
          position = undefined;
        }
      } else {
        position = e.pageX;
      }

      if (position) {
        const difFromStart = position - this.state.startPosition;
        const startIndex = this.state.startIndex;
        const direction = Math.round(difFromStart / this.state.pixelsPerProject);
        let projectIndex = startIndex + direction;

        if (projectIndex < 0) {
          projectIndex = 0;
        }
        if (projectIndex > projects.length - 1) {
          projectIndex = projects.length - 1;
        }

        let transformTotal = parseInt(this.state.startTransform, 10) + difFromStart;
        if (transformTotal < 0) {
          transformTotal = 0;
        }

        if (transformTotal > this.state.dragContainerWidth - this.state.pixelsPerProject) {
          transformTotal = this.state.dragContainerWidth - this.state.pixelsPerProject;
        }

        this.setState({
          projectIndex,
          transform: transformTotal,
        });
      }
    };

    handleDragEnd = () => {
      this.setState({
        mouseDown: false,
        transform: this.state.pixelsPerProject * this.state.projectIndex
      });
    };

    render() {
      return (
        <section className={this.state.mouseDown ? 'main-container drag' : 'main-container'}
          onMouseMove={(e) => this.state.mouseDown && this.handleDragMove(e)}
          onTouchMove={(e) => this.state.mouseDown && this.detectionDragOrSwipe(e)}
          onMouseLeave={this.handleDragEnd}
          onMouseUp={this.handleDragEnd}>
          <div className='two-column'>
            <HomePageAbout/>
            <DragContainer
              projectIndex={this.state.projectIndex}
              handleTouchStart={this.handleTouchStart}
              mouseDown={this.state.mouseDown}/>
            <DragBar
              callBackWidth={this.updateDimensions}
              handleDragStart={this.handleDragStart}
              handleTouchStart={this.handleTouchStart}
              pixelsPerProject={this.state.pixelsPerProject}
              transform={this.state.transform}/>
          </div>
        </section>
      );
    }
}

export default HomePage;
