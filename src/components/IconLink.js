import React from 'react';


const IconLink = (props) => {
    return (
        <div>
            <a href={props.link} target="_">{props.icon}</a>
        </div>
    );
};

export default IconLink;