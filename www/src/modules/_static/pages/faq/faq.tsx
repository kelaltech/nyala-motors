import React, {useState} from 'react'
import SEO from '../../../../shared/components/seo/seo'
import LayoutDefault from '../../../../shared/components/layout/layout'
import { useFaqQuery } from '../../../../app/graphql'
import { Loading, Warning, Content, Block, Card } from 'gerami'
import './faq.scss'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import Button from '../../../../shared/components/button/button'

type FaqProps = {}

const FAQ: React.FC<FaqProps> = () => {  
  const [isExpanded, setIsexapanded] = useState(false)
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
          <Content transparent size="3XL" className="faq-card-container">
s            {data.faqs.map((faq, key) => (
            <Card key={key} className="margin-vertical-very-big">
              <h3 className="padding-horizontal-big">{faq?.question}</h3><hr/>
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
                    {faq?.answer?.length >= 70 ? (
                      <span onClick={() => setIsexapanded(!isExpanded)}>
                        {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
                      </span>
                    ) : (
                    <MdExpandLess style={{ visibility: 'hidden' }} />
                    )}                 
                  </div>
                ):null}
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
