import React from 'react';

const ProjectTitleMobile = (props) => {
  return (
    <div className='right'>
      <div className='title-container'>
        <span className='circle'>0</span><span>{props.projectId + 1}</span>
        <hr/>
        <span className='circle total'>0</span><span className='number'>5</span>
        <div className='title'>
          <h1>{props.projectName}</h1>
        </div>
      </div>
      <img src={props.projectImg} alt='Mockup app homepage'/>
    </div>
  );
};

export default ProjectTitleMobile;
