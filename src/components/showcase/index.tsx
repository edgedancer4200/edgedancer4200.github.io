import * as React from 'react'
import { Link } from 'gatsby'
import { Section } from './styles'
import { Tween } from 'react-gsap'

// data
import data from '../../../data.json'

const Showcase: React.FC = () => {
  return (
    <Section id="showcase">
        <Tween to={{ x: 70 }} duration={2}>
          <p>{ data.header.main }</p>
        </Tween>
        <p>
          { data.header.secondary }
          <br/>
          <span style={{ marginTop: '10px' }}>
            Got an interest project in mind?
            <Link to="#contact">
              Let&apos;s talk.
            </Link>
          </span>
        </p>
    </Section>
  )
}

export default Showcase
