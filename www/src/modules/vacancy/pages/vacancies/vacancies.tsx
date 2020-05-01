import React from 'react'

import { useVacanciesQuery } from '../../../../app/graphql'
import SEO from '../../../../shared/components/seo/seo'
import Layout from '../../../../shared/components/layout/layout'

type VacanciesProps = {}

const Vacancies: React.FC<VacanciesProps> = () => {
  const { loading, error, data } = useVacanciesQuery()

  return (
    <>
      <SEO title="Vacancies" />

      <Layout headerProps={{ mode: 'white' }}>
        <>TODO: Vacancies</>

        <div>
          <pre>loading: {JSON.stringify(loading, null, 2)}</pre>
        </div>
        <div>
          <pre>error: {JSON.stringify(error, null, 2)}</pre>
        </div>
        <div>
          <pre>data: {JSON.stringify(data, null, 2)}</pre>
        </div>
      </Layout>
    </>
  )
}

export default Vacancies
