import React from 'react';

import {projects} from '../data/projects';
import ResponsiveProject from './responsive';
import MobileProject from './mobile';
import DesktopProject from './desktop';


const Project = (props) => {
    const project = projects.find(p => p.link === props.match.url);
    let content;

    if (project) {
        if (project.theme === "all") {
            content = <ResponsiveProject project={project}/>
        } else if (project.theme === "mobile") {
            content = <MobileProject project={project}/>
        } else {
            content = <DesktopProject project={project}/>
        }
    } else {
        content = <h1>404</h1>
    }
    return (
        <section className="main-container project">
            {content}
        </section>
    )
};

export default Project;
