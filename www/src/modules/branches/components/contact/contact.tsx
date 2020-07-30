import React, { useState, useCallback } from 'react'

import './contact.scss'
import { Input, TextArea, Block, Content } from 'gerami'
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
          <p>CUSTOMER SUGGESTION: ${message}<p>
          <p>Emailed From: ${email} <p>
        `,
      }),
    })
      .then(() => {
        alert('Successfully sent!')
      })
      .catch((e) =>
        alert(e?.message || 'Something went wrong, Maybe try again !')
      )
      .finally(() => setSending(false))
  }, [email, subject, message])

  return (
    <>
      <Content size={'S'} className={'contact-form-container'}>
        <Block first className={'full-width'}>
          <Input
            type="email"
            placeholder="  Your Email"
            value={email}
            className={'full-width'}
            onChange={(e) => setEmail(e.target.value)}
            disabled={sending}
            required
          />
        </Block>
        <Block>
          <Input
            type="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={'full-width'}
            disabled={sending}
            required
          />
        </Block>
        <Block last>
          <TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className={'full-width'}
            required
            disabled={sending}
            rows={7}
          />
        </Block>
        <div className={'btn-container'}>
          <Button
            mode={'primary'}
            onClick={send}
            disabled={sending}
            className="margin-none full-width"
          >
            Submit Suggestion
          </Button>
        </div>
      </Content>
    </>
  )
}

export default EmailContact
