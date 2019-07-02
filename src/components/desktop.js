import React from 'react';
import IntroProjectBig from './introProjectBig';
import ProjectText from './projectTextTwoColumn';
import ProjectImgLeftBig from './projectImgLeftBig';
import ProjectFooter from './projectFooter';
import {Link} from 'react-router-dom';

const DesktopProject = (props) => (
  <div className='project-container'>
    <Link to='/' className='links button'>Go back</Link>
    <IntroProjectBig projectImg={props.project.bigOneUrl} projectName={props.project.name}
      projectId={props.project.id}/>
    <ProjectText text={props.project.text} client={props.project.client} role={props.project.role}
      links={props.project.links}/>
    <ProjectImgLeftBig projectImg={props.project.bigTwoUrl}/>
    <ProjectFooter projectId={props.project.id}/>
  </div>
);

export default DesktopProject;
