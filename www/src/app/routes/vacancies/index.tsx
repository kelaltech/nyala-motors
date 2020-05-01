import React from 'react'
import { PageRendererProps } from 'gatsby'

import App from '../../app'
import Vacancies from '../../../modules/vacancy/pages/vacancies/vacancies'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Vacancies />
  </App>
)
