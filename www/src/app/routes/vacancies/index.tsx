import { PageRendererProps } from 'gatsby'
import React from 'react'

import Vacancies from '../../../modules/vacancy/pages/vacancies/vacancies'
import App from '../../app'

export default (props: PageRendererProps) => (
  <App pageRendererProps={props}>
    <Vacancies />
  </App>
)
