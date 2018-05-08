import React from "react";
import _ from 'lodash';

const HoverProject = ({
    opacity,
    tags,
    title,
    id,
    url,
    toggleModalShow,
    defaultClass
}) => {
    var tagsLi = _.map(tags, (tag, i)=>{
        return <li key={`${tag}_${i}`}>{tag}</li>
    });
    return(
        <div className={defaultClass} style={{
            opacity: opacity
        }}>
            <h3>{title}</h3>
            <ul>
                {tagsLi}
            </ul>
            <div className="btn btn-success btn-block" onClick={toggleModalShow}>View project</div>
        </div>
    );
}

export default HoverProject;