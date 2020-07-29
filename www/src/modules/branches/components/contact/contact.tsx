import React, { useState, useCallback } from 'react'

import './contact.scss'
import { Input, Block, Button } from 'gerami'
import { strapiApiBase, contactEmail } from '../../../../../constants'

type EmailContactProps = {}

const EmailContact = ({}: EmailContactProps) => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [artist, setArtist] = useState('')

  const [sending, setSending] = useState(false)

  const send = useCallback(() => {
    setSending(true)

    fetch(`${strapiApiBase}/sendemail`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: contactEmail,
        subject: `Awtar Artist Interviewee Suggestion`,
        html: `
          <p>SUGGESTED ARTIST: ${artist}<p>
          <p>SUGGESTED BY: ${email} (${phone})<p>
        `,
      }),
    })
      .then(() => {
        alert('Successfully sent!')
      })
      .catch((e) => alert(e?.message || 'Unknown error.'))
      .finally(() => setSending(false))
  }, [email, phone, artist])

  return (
    <>
      <div className="interview-suggestion-form">
        <div style={{ flex: 1 }} />

        <Block first className="padding-horizontal-none">
          <h5>Your phone number:</h5>
          <div className="padding-top-normal">
            <Input
              type="phone"
              placeholder="Example: 0912345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={sending}
              required
            />
          </div>
        </Block>

        <Block className="padding-horizontal-none">
          <h5>Your email address:</h5>
          <div className="padding-top-normal">
            <Input
              type="email"
              placeholder="Example: example@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={sending}
              required
            />
          </div>
        </Block>

        <Block last className="padding-horizontal-none">
          <h5>Name of artist you want interviewed:</h5>
          <div className="padding-top-normal">
            <Input
              type="text"
              placeholder="Artist name"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              disabled={sending}
              required
            />
          </div>
        </Block>

        <Block className="padding-horizontal-none">
          <Button onClick={send} disabled={sending} className="margin-none">
            Submit Suggestion
          </Button>
        </Block>
      </div>
    </>
  )
}

export default EmailContact
