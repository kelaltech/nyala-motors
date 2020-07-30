import React from 'react'
import SEO from '../../../../shared/components/seo/seo'
import LayoutDefault from '../../../../shared/components/layout/layout'
import { Block } from 'gerami'
import './feedback.scss'

type FeedbackProps = {}

const Feedback: React.FC<FeedbackProps> = () => {
  return (
    <>
      <SEO title="Feedback" />

      <LayoutDefault headerProps={{ mode: 'primary' }}>
        <Block className="center feedback-container">
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
