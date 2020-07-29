import React, { useState, useCallback } from 'react'

import './contact.scss'
import { Input, TextArea } from 'gerami'
import { strapiApiBase, contactEmail } from '../../../../../constants'
import Button from '../../../../shared/components/button/button'

type EmailContactProps = {}

const EmailContact = ({}: EmailContactProps) => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [sending, setSending] = useState(false)

  const send = useCallback(() => {
    setSending(true)

    fetch(`${strapiApiBase}/sendemail`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: contactEmail,
        subject: `${subject}`,
        html: `
          <p>SUGGESTED ARTIST: ${message}<p>
          <p>Emailed From: ${email} <p>
        `,
      }),
    })
      .then(() => {
        alert('Successfully sent!')
      })
      .catch((e) => alert(e?.message || 'Unknown error.'))
      .finally(() => setSending(false))
  }, [email, subject, message])

  return (
    <>
      <div className={'contact-form-container'}>
        <div style={{ flex: 1 }} />          
        
        <div>
          <Input
            type="email"
            placeholder="  Your Email"
            value={email}
            className={'contact-form-send-message-input'}
            onChange={(e) => setEmail(e.target.value)}
            disabled={sending}
            required
          />
        </div>
        <div>
        <Input
              type="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={'contact-form-send-message-input'}
              disabled={sending}
              required
            />
        </div>
        <div>
          <TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className={'contact-form-send-message-input'}
            required
            disabled={sending}
            rows={7}
          />
      </div>
        <div>
          <Button 
          mode={'primary'}
          onClick={send} 
          disabled={sending} 
          className="margin-none">
            Submit Suggestion
          </Button>
        </div>
      </div>
    </>
  )
}

export default EmailContact
