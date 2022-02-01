import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import '../assets/components/ContactCard.css'

const ContactCard = () => {

    const USER_ID = process.env.REACT_APP_USER_ID
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }

        emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID)
            .then((res) => {
                console.log(res.status);
                nameRef.current.value = ''
                emailRef.current.value = ''
                messageRef.current.value = ''
            }, (err) => {
                console.log(err.text);
            })
        
    }
    return (
        <section className="contact-card-wrapper">
            <h1 className="contact-card-title">Contact me</h1>
            <form id="#contact-form" className="contact-form">
                <input ref={nameRef} className="form-input" type="text" id="name" name="name" placeholder="Alex Torres" />
                <input ref={emailRef} className="form-input" type="text" id="email" name="email" placeholder="hey@example.com" />
                <textarea ref={messageRef} className="form-input" type="textarea" id="content" name="content" placeholder="Write your message..." />
                <button type="submit" id="submit-btn" onClick={(event) => handleSubmit(event) }>Submit</button>
            </form>
        </section>
    );
};

export default ContactCard;