import React from 'react';

export const ProjectImage = (props) => {
    return (
        <div onTouchStart={(e) => props.handleTouchStart(e, false)} className={props.mouseDown ? "image-container small" : "image-container"}>
            <img src={props.image} alt="Mock-up of project"/>
        </div>
    );
};