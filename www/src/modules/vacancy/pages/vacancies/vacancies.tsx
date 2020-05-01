import React from 'react'

import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'

type VacanciesProps = {}

const Vacancies: React.FC<VacanciesProps> = () => {
  return (
    <>
      <SEO title="Vacancies" />

      <Layout headerProps={{ mode: 'white' }}>
        <>TODO: Vacancies</>
      </Layout>
    </>
  )
}

export default Vacancies
