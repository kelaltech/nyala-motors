import React from 'react'
import SEO from '../../../../shared/components/seo/seo'
import LayoutDefault from '../../../../shared/components/layout/layout'
import { useFaqQuery } from '../../../../app/graphql'
import { Loading, Warning, Content } from 'gerami'

type FaqProps = {}

const FAQ: React.FC<FaqProps> = () => {
  const { loading, error, data } = useFaqQuery()
  return (
    <>
      <SEO title="FAQ" />

      <LayoutDefault>
        <div className="faq-header">
          <h1>FAQs</h1>
        </div>

        {!data && loading ? (
          <div className="padding-very-big">
            <Loading className="margin-vertical-very-big" delay={700} />
          </div>
        ) : !data?.faqs || error ? (
          <div className="padding-very-big">
            <Warning problem={error as any} />
          </div>
        ) : (
          <Content>
            {data.faqs.map((faq, key) => (
              <div key={key}>
                {faq?.answer}
                {faq?.question}
              </div>
            ))}
          </Content>
        )}
      </LayoutDefault>
    </>
  )
}

export default FAQ
