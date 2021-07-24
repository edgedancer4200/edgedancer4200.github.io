import React, { useState, useEffect } from 'react'

// styles
import { Section, Form, EmailField, MessageField, BtnSubmit } from './styles'

// local
import { response } from './actions'

// interfaces
import { MessageI } from '../../interfaces'

const dflFields = {
  email: '',
  message: ''
}

const Contact: React.FC = () => {
  const [emailRes, setEmailRes] = useState<string>('')
  const [submiting, setSubmitting] = useState(false)
  const [fields, setFields] = useState<MessageI>(dflFields)

  useEffect(() => {
    if (emailRes === response.success) setFields(dflFields)
  }, [setEmailRes])

  // actions module dynamically imported when required
  useEffect(() => {
    if (fields.message) import('./actions').then(_module => _module.handletextareaInput())
  }, [fields.message])

  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFields({ ...fields, [e.target.name]: e.target.value })

  const _handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()

    setSubmitting(true)
    setEmailRes('')

    // actions module dynamically imported when required
    import('./actions').then(async (_module) => {
      const res = await _module.sendMessage(fields)

      if (res[1] !== false) setFields(dflFields)
      setEmailRes(res[0])
      setSubmitting(false)
    })
  }

  return (
        <Section id="contact">
            <h3>
                I&lsquo;m open to discuss your project. Let&lsquo;s work together.
            </h3>
            <Form onSubmit={ _handleSubmit }>
                <EmailField
                    type="text"
                    name="email"
                    placeholder="Your Email Address"
                    value={ fields.email }
                    spellCheck={ false }
                    onChange={ (e: React.ChangeEvent<HTMLInputElement>) => _handleChange(e) }
                />
                <MessageField
                    type="text"
                    name="message"
                    value={ fields.message }
                    placeholder="Your Message"
                    spellCheck={ false }
                    onChange={ (e: React.ChangeEvent<HTMLInputElement>) => _handleChange(e) }
                >
                </MessageField>
                <span id="res_message" style={{ display: emailRes ? 'block' : 'none', margin: '0 0 2em 1em' }}>
                    { emailRes }.
                </span>
                <BtnSubmit disabled={ submiting }>
                    send message
                </BtnSubmit>
            </Form>
        </Section>
  )
}

export default Contact
