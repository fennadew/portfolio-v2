import React from "react";

const ProjectText = (props) => {
    let links;
    if (props.links.length === 1) {
        links = <div className="link-container"><a href={props.links[0]} className="links" target="blank">Go to website</a></div>
    } else {
        links = <div className="link-container"><a href={props.links[0]}  className="links" target="blank">Go to website</a>
            <a href={props.links[1]}  className="links" target="blank">Github</a></div>
    }
    return (
        <article className="project-text">
            <div className="text-left">
                <h2>Role</h2>
                <p>{props.role}</p>
                <h2>Client</h2>
                <p>{props.client}</p>
            </div>
            <div>
                <h2>Project</h2>
                {props.text.map((text, i) => {
                    return (
                        <p key={i}>{text}</p>
                    )
                })}
                {links}
            </div>
        </article>
    )
};

export default ProjectText;
