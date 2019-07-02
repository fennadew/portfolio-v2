import React from 'react';
import ProjectTitleMobile from "./projectTitleMobile";
import ProjectText from './projectTextTwoColumn';
import ProjectFooter from './projectFooter';
import {Link} from 'react-router-dom';

const MobileProject = (props) => (
    <div className="project-container mobile-only">
        <Link to="/" className="links button">Go back</Link>
        <div className="intro-project">
            <ProjectTitleMobile projectName={props.project.name} projectId={props.project.id}
                                projectImg={props.project.smallOneUrl}/>
            <ProjectText text={props.project.text} client={props.project.client} role={props.project.role}
                         links={props.project.links}/>
        </div>
        <div className="project-image"><img src={props.project.smallTwoUrl} alt="Mockup from app"/></div>
        <div className="project-image offset"><img src={props.project.smallThreeUrl} alt="Mockup from app"/></div>
        <ProjectFooter projectId={props.project.id}/>
    </div>
);

export default MobileProject;
