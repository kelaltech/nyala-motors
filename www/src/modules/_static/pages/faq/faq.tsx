import React from 'react'
import SEO from '../../../../shared/components/seo/seo'
import LayoutDefault from '../../../../shared/components/layout/layout'
import { useFaqQuery } from '../../../../app/graphql'
import { Loading, Warning, Content, Block, Card } from 'gerami'
import './faq.scss'

type FaqProps = {}

const FAQ: React.FC<FaqProps> = () => {
  const { loading, error, data } = useFaqQuery()
  return (
    <>
      <SEO title="FAQ" />

      <LayoutDefault>
        <div className={'faq-hero-container'}>
          <Block className="center faq-hero-tag">
            <h1>Frequently asked Questions </h1>
          </Block>
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
          <Content transparent size="3XL">
            <Block first last>
              {data.faqs.map((faq, key) => (
                <Card key={key} className="margin-vertical-very-big">
                  <h3>{faq?.answer}</h3>
                  <p>{faq?.question}</p>
                </Card>
              ))}
            </Block>
          </Content>
        )}
      </LayoutDefault>
    </>
  )
}

export default FAQ
