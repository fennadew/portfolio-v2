import React, {Component} from 'react';
import {withRouter, Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import Header from './components/header';
import Homepage from './components/homepage';
import Navigation from './components/navigation';
import AboutMe from './components/aboutMe';
import Project from './components/project';

import './assets/scss/style.scss';

function getPathDepth(location) {
  let pathArr = (location || {}).pathname.split('/');
  pathArr = pathArr.filter(n => n !== '');
  if (!pathArr[0]) {
    pathArr[0] = '';
  }
  return pathArr[0];
}

function currentProject(location) {
  let pathArr = (location || {}).pathname.split('/');
  pathArr = pathArr.filter(n => n !== '');
  if (pathArr.length === 2) {
    pathArr[0] = pathArr[1];
  } else {
    pathArr[0] = '';
  }
  return pathArr[0];
}

class App extends Component {
    state = {
      prevDepth: getPathDepth(this.props.location),
      newDepth: getPathDepth(this.props.location),
      currentProject: currentProject(this.props.location),
      transition: 'fade'
    };

    componentWillReceiveProps(nextProps) {
      let prev = getPathDepth(this.props.location);
      let next = getPathDepth(nextProps.location);
      let current = currentProject(this.props.location);
      this.setState({
        prevDepth: prev,
        newDepth: next,
        currentProject: current
      });
      this.getTransition(prev, next);
    }

    getTransition(prev, next) {
      let transition;
      if (prev === '' && next === 'about')
        transition = 'fade';
      else if (next === 'about' && prev === '') {
        transition = 'fade';
      } else if (next === 'projects' && prev === '') {
        transition = 'expand';
      } else if (next === '' && prev === 'projects') {
        transition = 'expand';
      } else if (next === 'about' && prev === 'projects') {
        transition = 'collapse';
      } else if (next === 'projects' && prev === 'projects') {
        transition = 'project';
      } else {
        transition = 'fade';
      }
      this.setState({
        transition
      });
    }

    childFactoryCreator = (classNames) => (
      (child) => (
        React.cloneElement(child, {
          classNames
        })
      )
    );

    render() {
      let mainName;
      if (this.props.location.pathname === '/about') {
        mainName = 'about';
        document.body.classList.remove('project');
        document.body.classList.remove('homepage');
      } else if (this.props.location.pathname === '/') {
        mainName = undefined;
        document.body.classList.remove('project');
        document.body.classList.add('homepage');
      } else {
        mainName = 'project';
        document.body.classList.add('project');
        document.body.classList.remove('homepage');
      }
      
      return (
        <Route render={({location}) => (
          <TransitionGroup component={null}>
            <CSSTransition key={1} classNames='initial' timeout={600} appear>
              <div className='app'>
                <Header location={location}/>
                <Navigation location={location}/>
                <main className={mainName}>
                  <TransitionGroup component={null}
                    childFactory={this.childFactoryCreator(this.state.transition)}>
                    <CSSTransition key={location.key} classNames={this.state.transition} timeout={2000}
                      appear>
                      <Switch location={location}>
                        <Route exact={true} path='/' render={props => (
                          <Homepage {...props} current={this.state.currentProject}/>
                        )}/>
                        <Route exact={true} path='/about' component={AboutMe}/>
                        <Route exact={true} path='/projects/:project' component={Project}/>
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </main>
                <div className='offset'></div>
              </div>
            </CSSTransition>
          </TransitionGroup>
        )
        }
        />
      );
    }
}

export default withRouter(App);
