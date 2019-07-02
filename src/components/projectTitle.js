import React from 'react';

export const ProjectTitle = (props) => {
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
    </div>
  );
};


