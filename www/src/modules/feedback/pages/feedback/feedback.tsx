import { Block } from 'gerami'
import React from 'react'

import LayoutDefault from '../../../../shared/components/layout/layout'
import SEO from '../../../../shared/components/seo/seo'
import './feedback.scss'

type FeedbackProps = {}

const Feedback: React.FC<FeedbackProps> = () => {
  return (
    <>
      <SEO
        title="Nyala Motors S.C Feedback Form"
        description={`If you have any feedbacks regarding our products and services, please don't hesitate to write it here on the form; Nyala Motors S.C.`}
      />

      <LayoutDefault headerProps={{ mode: 'primary' }}>
        <Block first last className="center feedback-container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfsb-ETLA2g3R0nBqVozuCBxLbvog1cGIqMhFocT6CwQzX4bg/viewform?usp=sf_link"
            frameBorder={0}
            scrolling={'no'}
            className="feedback-form"
          >
            Loading…
          </iframe>
        </Block>
      </LayoutDefault>
    </>
  )
}

export default Feedback
