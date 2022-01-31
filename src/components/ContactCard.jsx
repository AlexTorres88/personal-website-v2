import React from 'react';
import '../assets/components/ContactCard.css'

const ContactCard = () => {
    return (
        <section className="contact-card-wrapper">
            <h1 className="contact-card-title">Contact me</h1>
            <form class="contact-form">
                <input className="form-input" type="text" id="name" name="name" placeholder="Alex Torres" />
                <input className="form-input" type="text" id="email" name="email" placeholder="hey@example.com" />
                <textarea className="form-input" type="textarea" id="content" name="content" placeholder="Write your message..." />
                <button type="submit" id="submit-btn">Submit</button>
            </form>
        </section>
    );
};

export default ContactCard;