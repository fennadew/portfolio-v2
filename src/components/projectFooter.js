import React from 'react';
import {Link} from 'react-router-dom';
import {projects} from '../data/projects';

function onNavCLick() {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(onNavCLick);
        window.scrollTo (0,currentScroll - (currentScroll/5));
    }
}

function timeOut() {
    setTimeout(() => {
        onNavCLick();
    }, 250)
}
const ProjectFooter = (props) =>  {
    let nextLink;
    if (props.projectId === projects.length - 1) {
        nextLink = 0;
    } else {
        nextLink = props.projectId + 1
    }
   return (
       <div className="project-footer">
           <Link to={projects[nextLink].link} onClick={() => timeOut()} className="links">Next project</Link>
       </div>
   )
};

export default ProjectFooter;
