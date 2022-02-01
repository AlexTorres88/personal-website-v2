import React, { useState, useEffect } from 'react';
import '../../assets/modules/home/Home.css'

const TopContainer = () => {

    const [index, setIndex] = useState(1);

    const messages = {
        0: ['A' , 'SOFTWARE ENGINEER'],
        1: ['A','FINANCE ENTHUSIAST'],
        2: ['AN', 'AVID READER']
    }

    const handleText = (idx) => {
        const length = Object.keys(messages).length
        if(idx > length -1) {
            setIndex(0);
        } else {
            setIndex(idx);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => handleText(index + 1), 4000);
        return () => clearTimeout(timer);
      }, [index]);

    return (
        <section className="top-container-wrapper">
            <div className="top-container-title-wrapper">
                <h1 className="top-container-title">
                    HI, MY NAME IS 
                    <br/>ALEX TORRES<br/>
                    I'M {messages[index][0]}<br/>
                    <span className="highlight-text">{messages[index][1]}</span>
                </h1>
            </div>
        </section>
    )
}

export default TopContainer;