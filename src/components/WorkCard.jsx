import React from 'react';
import InfoIconModal from './InfoIconModal';

const WorkCard = (props) => {
    return (
        <div className={props.class}>   
            <p className="work-exp-desc"><span><a href={props.link} target="_">{props.company}</a></span>{props.title}</p>
            <p className="work-exp-date">{props.date}</p>
            <InfoIconModal title={props.company} body={props.desc} logo={props.logo}/>
        </div>
    );
}

export default WorkCard;