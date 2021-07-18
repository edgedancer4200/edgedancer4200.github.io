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

    useEffect(() => { /* dynamic module import */
        if (fields.message)
            import('./utilities').then(_module => _module.handletextareaInput());
    }, [fields.message]);


    const _handleChange = (e) => setFields({ ...fields, [e.target.name]: e.target.value });


    const _handleSubmit = (e) => {
        e.preventDefault();

        setEmailSent(false);
       
        emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, fields, process.env.USERID)
        .then((result) => setEmailSent(true))
        .catch(err => console.error(err));
    }


    return (
        <Section id="contact">
            <h3>
                I'm open to discuss your project. Let's work together.
            </h3>
            <Form onSubmit={ _handleSubmit }>
                {/* Email */}
                <EmailField
                    type="text"
                    name="email"
                    placeholder="Your Email Address"
                    value={ fields.email }
                    spellCheck={ false }
                    onChange={ (e) => _handleChange(e) }
                />
                {/* Message */}
                <MessageField
                    type="text"
                    name="message"
                    value={ fields.message }
                    placeholder="Your Message"
                    spellCheck={ false }
                    onChange={ (e) => _handleChange(e) }
                >
                </MessageField>
                <span id="message_sent" style={{ display: emailSent ? 'block' : 'none', margin: '0 0 2em 1em' }}>
                    Your message has been sent.
                </span>
                <BtnSubmit>
                    send message
                </BtnSubmit>
            </Form>
        </Section>
    )
}

export default Contact