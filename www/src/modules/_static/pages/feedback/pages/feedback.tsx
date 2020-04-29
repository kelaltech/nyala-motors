import React from 'react'

import SEO from '../../../../../shared/components/seo/seo'
import LayoutDefault from '../../../../../layouts/layout-default/layout-default'

type Feedback = {}

const Feedback: React.FC<Feedback> = () => {
  return (
    <>
      <SEO title="Feedback" />

      <LayoutDefault>
        <div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScGr8rLqD-tntjntVT5TupqORR4wcCZ9DEmAXNqr_ptZD9yaw/viewform?embedded=true"
            frameBorder={0}
            scrolling={'no'}
            width={640}
            height={750}
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
      </LayoutDefault>
    </>
  )
}

export default Feedback
