import { PageRendererProps } from 'gatsby'
import React from 'react'

import VacancyDetail from '../../../modules/vacancy/pages/vacancy-detail/vacancy-detail'
import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <VacancyDetail />
  </App>
)
