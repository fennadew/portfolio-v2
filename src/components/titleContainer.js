import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {projects} from "../data/projects";
import {Link} from 'react-router-dom';

export const TitleContainer = (props) => (
    <div className="title-container">
        <span className="circle">0</span><span>{props.index + 1}</span>
        <hr/>
        <span className="circle total">0</span><span className="number">5</span>
        <TransitionGroup className="title">
            <CSSTransition key={props.title} timeout={400} classNames="slide-up" appear>
                <h2>{props.title}</h2>
            </CSSTransition>
        </TransitionGroup>
        <TransitionGroup className="project-link-container">
            <CSSTransition key={props.index} timeout={400} classNames="slide-up" appear>
                <Link to={projects[props.index].link}
                      className="links button project-button">View project</Link>
            </CSSTransition>
        </TransitionGroup>
    </div>
);
