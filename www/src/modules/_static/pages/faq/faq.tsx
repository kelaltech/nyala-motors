import { graphql, useStaticQuery } from 'gatsby'
import { Block, Card, Content, Loading, Warning } from 'gerami'
import React, { useState } from 'react'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'

import { FaqStaticQuery } from '../../../../../graphql-types'
import { useFaqQuery } from '../../../../app/graphql'
import LayoutDefault from '../../../../shared/components/layout/layout'
import SEO from '../../../../shared/components/seo/seo'
import './faq.scss'

type FaqProps = {}

const FAQ: React.FC<FaqProps> = () => {
  const [isExpanded, setIsexapanded] = useState(false)
  const { loading, error, data } = useFaqQuery()
  const { faqHero } = useStaticQuery<FaqStaticQuery>(query)
  return (
    <>
      <SEO title="FAQ" />

      <LayoutDefault>
        <div
          className={'faq-hero-container'}
          style={{
            backgroundImage: `url(${faqHero?.childImageSharp?.fluid?.src})`,
          }}
        >
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
          <Content transparent size="XL" className="faq-card-container">
            {data.faqs.map((faq, key) => (
              <Card key={key} className="margin-vertical-very-big">
                <h3 className="padding-horizontal-big">{faq?.question}</h3>
                <hr />
                <Block className="faq-card-content">
                  <p
                    style={{
                      height: `${isExpanded ? 'auto' : '65px'}`,
                    }}
                  >
                    {faq?.answer}
                  </p>
                  {faq?.answer ? (
                    <div className="fg-blackish center right font-L expandable-icon">
                      {faq?.answer?.length >= 380 ? (
                        <span onClick={() => setIsexapanded(!isExpanded)}>
                          {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
                        </span>
                      ) : (
                        <MdExpandLess style={{ visibility: 'hidden' }} />
                      )}
                    </div>
                  ) : null}
                </Block>
              </Card>
            ))}
          </Content>
        )}
      </LayoutDefault>
    </>
  )
}

export default FAQ
const query = graphql`
  query FaqStatic {
    faqHero: file(relativePath: { eq: "about/nyala.jpg" }) {
      childImageSharp {
        fluid(quality: 90, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
