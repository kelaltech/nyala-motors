import { Block } from 'gerami'
import React from 'react'

import LayoutDefault from '../../../shared/components/layout/layout'
import SEO from '../../../shared/components/seo/seo'

import './service-form.scss'

type ServiceFormProps = {}

const ServiceForm: React.FC<ServiceFormProps> = () => {
  return (
    <>
      <SEO title="Services Form" description={`Service booking form`} />

      <LayoutDefault headerProps={{ mode: 'primary' }}>
        <Block className="center service-form-container padding-none">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeDRgRKJ7V0bin9npX4Qx0FOh2BG2JZzPMfaQxkcA-J5pq9Jw/viewform?embedded=true"
            frameBorder={0}
            scrolling={'no'}
            className="service-form"
          >
            Loading
          </iframe>
        </Block>
      </LayoutDefault>
    </>
  )
}

export default ServiceForm
