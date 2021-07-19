import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
// styles
import { Section, Form, EmailField, MessageField, BtnSubmit } from './styles';
const Contact = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [fields, setFields] = useState({
        email: '',
        message: ''
    });
    useEffect(() => {
        if (fields.message)
            import('./utilities').then(_module => _module.handletextareaInput());
    }, [fields.message]);
    const _handleChange = (e) => setFields(Object.assign(Object.assign({}, fields), { [e.target.name]: e.target.value }));
    const _handleSubmit = (e) => {
        e.preventDefault();
        setEmailSent(false);
        emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, fields, process.env.USERID)
            .then((_) => setEmailSent(true))
            .catch(err => console.error(err));
    };
    return (React.createElement(Section, { id: "contact" },
        React.createElement("h3", null, "I'm open to discuss your project. Let's work together."),
        React.createElement(Form, { onSubmit: _handleSubmit },
            React.createElement(EmailField, { type: "text", name: "email", placeholder: "Your Email Address", value: fields.email, spellCheck: false, onChange: (e) => _handleChange(e) }),
            React.createElement(MessageField, { type: "text", name: "message", value: fields.message, placeholder: "Your Message", spellCheck: false, onChange: (e) => _handleChange(e) }),
            React.createElement("span", { id: "message_sent", style: { display: emailSent ? 'block' : 'none', margin: '0 0 2em 1em' } }, "Your message has been sent."),
            React.createElement(BtnSubmit, null, "send message"))));
};
export default Contact;
