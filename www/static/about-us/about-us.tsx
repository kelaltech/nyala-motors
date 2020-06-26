import React from 'react'
import './about-us.scss'
import { Content, Block } from 'gerami'
import SEO from '../../src/shared/components/seo/seo'
import LayoutDefault from '../../src/shared/components/layout/layout'
import { IoMdArrowDropright } from 'react-icons/io'
type AboutUs = {}
const AboutUs: React.FC<AboutUs> = () => {
  return (
    <>
      <SEO title="About us" />
      <LayoutDefault headerProps={{ mode: 'white' }}>
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio
              viverra neque ac. Purus ultrices mus adipiscing nunc nibh.
              Malesuada in eget at quisque cum ac eu sem. Fringilla vulputate a
              facilisis at. Sed sem in nec amet, eu adipiscing. Proin sed lacus
              hendrerit magna volutpat fames sapien sed. Nisl enim nulla in at
              magna vestibulum. Lorem vel nullam enim risus at nisl. Nibh
              pellentesque tristique sem sit ut in risus, nibh. Facilisi tempor,
              sed dictumst donec lacus eget. Odio dignissim viverra eleifend
              euismod malesuada. Lorem luctus gravida pulvinar quam ullamcorper
              sapien habitasse et, vel. Odio lorem in bibendum et mauris feugiat
              malesuada vitae. In ut ut elit, molestie nunc, tristique lectus.
              Pulvinar justo, justo amet vestibulum. Magna in eleifend fermentum
              pharetra, morbi nunc pretium. In magna ac, feugiat facilisi
              tellus. Tincidunt non egestas porttitor risus. Erat arcu a.
            </p>
          </Block>

          <div className={'about-main-img'} />

          <Block id={'values'} first last className={'overview-desc'}>
            <h2>Values</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              vel sit scelerisque faucibus et cum sed. Tellus, potenti dui et in
              sit potenti lorem. Sem sit metus neque netus scelerisque sit
              volutpat. Enim ullamcorper et risus porta id scelerisque turpis
              ornare a. Semper egestas morbi in libero convallis sed vel.
              Posuere feugiat commodo gravida placerat in eleifend sollicitudin
              quisque. Tortor adipiscing posuere sed et egestas vitae. At eu
              habitant mollis nisl ipsum. Id interdum aliquet nibh neque,
              eleifend egestas enim ultricies tellus. Viverra feugiat quis quis
              id mauris elementum. Suspendisse facilisi cras in diam non ipsum
              tortor vulputate est. Sed orci tristique pharetra sit sed id.
            </p>
          </Block>

          <Block id={'mission'} first last className={'overview-desc'}>
            <div className={'right full-width'}>
              <h2 className={'right'}>Mission Statement</h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel,
              cursus sem fames arcu faucibus vitae quam tempor, ut. Elit amet
              mauris lacus aliquet vitae elementum felis nibh neque. Mattis
              aliquam phasellus purus et consectetur elementum. Urna, risus,
              scelerisque arcu faucibus libero fermentum dictum sed. Sit commodo
              ac pellentesque ipsum tellus viverra. Consectetur tortor duis
              laoreet lectus orci cras vitae scelerisque ut. Diam
            </p>
          </Block>

          <Block id={'achivements'} first last className={'overview-desc'}>
            <h2>Our Achivements</h2>

            <Block>
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
            </Block>
          </Block>

          <Block first last />
          <Block first last />
        </Content>
      </LayoutDefault>
    </>
  )
}

export default AboutUs
