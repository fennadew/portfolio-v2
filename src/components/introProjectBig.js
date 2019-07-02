import React from 'react';
import {ProjectTitle} from "./projectTitle";


const IntroProjectBig = (props) => (
        <div className="intro-project">
            <ProjectTitle projectName={props.projectName} projectId={props.projectId}/>
            <img src={props.projectImg} alt="Mockup homepage"/>
        </div>
);

export default IntroProjectBig;
