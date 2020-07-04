import React from 'react'
import './about-us.scss'
import { Content, Block, Loading, Warning } from 'gerami'
import SEO from '../../../../shared/components/seo/seo'
import LayoutDefault from '../../../../shared/components/layout/layout'
import { IoMdArrowDropright } from 'react-icons/io'
import Markdown from 'markdown-to-jsx'
import { useAboutQuery } from '../../../../app/graphql'

type AboutUs = {}
const AboutUs: React.FC<AboutUs> = () => {
  const { loading, error, data } = useAboutQuery()
  return (
    <>
      <SEO title="About us" />
      <LayoutDefault headerProps={{ mode: 'white' }}>
        {!data && loading ? (
          <div className="padding-very-big">
            <Loading className="margin-vertical-very-big" delay={700} />
          </div>
        ) : !data?.about || error ? (
          <div className="padding-very-big">
            <Warning problem={error as any} shy={true} />
          </div>
        ) : (
          <>
            <div className={'about-hero-container'}>
              <Block className="center about-hero-tag">
                <h1>About Nyala Motors S.C.</h1>
              </Block>
            </div>
            <div className={'about-outline-box'}>
              <div className={'about-outline-item'}>
                <span>
                  <IoMdArrowDropright />
                </span>
                <a href={'#overview'}>OVERVIEW</a>
              </div>

              <div className={'about-outline-item'}>
                <span>
                  <IoMdArrowDropright />
                </span>
                <a href={'#values'}>VALUES</a>
              </div>

              <div className={'about-outline-item'}>
                <span>
                  <IoMdArrowDropright />
                </span>
                <a href={'#mission'}>MISSION</a>
              </div>

              <div className={'about-outline-item'}>
                <span>
                  <IoMdArrowDropright />
                </span>
                <a href={'#achivements'}>OUR ACHIVEMENTS</a>
              </div>
            </div>
            <Content transparent className={'about-content'} size="4XL">
              <Block className={'center about-content-title'}>
                <div className="title-box">
                  <h1>Nyala Motors S.C.</h1>
                  <p>SINCE 1973</p>
                </div>
              </Block>
            </Content>
            <Block first last />
            <Block />
            <Content size="4XL" className={'about-main-container'}>
              <Block first last />
              <Block first last />
              <Block id={'overview'} first last className={'overview-desc'}>
                <h2>Overview</h2>
                <Markdown className={'mark-down-p'}>
                  {data.about.overviewHistory}
                </Markdown>
              </Block>

              {/* <div className={'about-main-img'} /> */}

              <Block id={'values'} first last className={'overview-desc'}>
                <h2>Values</h2>
                <Markdown className={'mark-down-p'}>
                  {data.about.values}
                </Markdown>
              </Block>

              <Block id={'mission'} first last className={'overview-desc'}>
                <div className={'right full-width'}>
                  <h2 className={'right'}>Mission Statement</h2>
                </div>

                <Markdown className={'mark-down-p'}>
                  {data.about.mission}
                </Markdown>
              </Block>

              <Block id={'achivements'} first last className={'overview-desc'}>
                <h2>Our Achivements</h2>

                <Block>
                  <Markdown className="about-page-details-description">
                    {data.about.achievements}
                  </Markdown>
                  {/*                     
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                */}
                </Block>
              </Block>

              <Block first last />
              <Block first last />
            </Content>
          </>
        )}
      </LayoutDefault>
    </>
  )
}

export default AboutUs
