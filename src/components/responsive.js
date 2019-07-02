import React from 'react';
import IntroProjectBig from "./introProjectBig";
import ProjectTextAll from "./projectTextAll";
import MobileContainer from "./mobileContainer";
import DesktopContainer from "./desktopContainer";
import ProjectFooter from "./projectFooter";
import {Link} from "react-router-dom";

const ResponsiveProject = (props) => (
    <div className="project-container">
        <Link to="/" className="links button">Go back</Link>
        <IntroProjectBig projectImg={props.project.bigOneUrl} projectName={props.project.name} projectId={props.project.id}/>
        <ProjectTextAll projectImg={props.project.smallOneUrl} text={props.project.text} client={props.project.client} role={props.project.role} links={props.project.links}/>
        <MobileContainer projectImg={props.project.smallTwoUrl}/>
        <DesktopContainer projectImg={props.project.bigTwoUrl}/>
        <ProjectFooter projectId={props.project.id}/>
    </div>
);

export default ResponsiveProject;
