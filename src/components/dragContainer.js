import React, {Component} from 'react';

import {projects} from "../data/projects";
import HomePageLink from './projectLink';
import {TitleContainer} from './titleContainer';

class DragContainer extends Component {
    render() {
        const { projectIndex, mouseDown } = {...this.props};
        return (
            <div className="right">
                <TitleContainer title={projects[projectIndex].name} index={projectIndex}
                                color={projects[projectIndex].color}/>
                <div className="overflow-hidden">
                    <ul style={{
                        width: projects.length * 100 + "%",
                        transform: "translateX(-" + projectIndex * (100 / projects.length) + "%)"
                    }}>
                        {projects.map((obj, i) => {
                            return (
                                <li key={i}>
                                    <HomePageLink
                                        project={obj}
                                        projectIndex={i}
                                        handleTouchStart={this.props.handleTouchStart}
                                        mouseDown={mouseDown}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default DragContainer;