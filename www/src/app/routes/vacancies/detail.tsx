import React from 'react'
import { PageRendererProps } from 'gatsby'

import App from '../../app'
import VacancyDetail from '../../../modules/vacancy/pages/vacancy-detail/vacancy-detail'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <VacancyDetail />
  </App>
)
