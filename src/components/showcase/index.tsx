import * as React from 'react'
import { Link } from 'gatsby'
import { Section } from "./styles"

// data
import data from '../../../data.json'

const Showcase: React.FC = () => {
  return (
    <Section id="showcase">
        <p>{ data.header.main }</p>
        <p>
          { data.header.secondary }
          <br/>
          <span style={{ marginTop: '10px' }}>
            Got an interest project in mind?
            <Link to="#contact">
              Let's talk.
            </Link>
          </span>
        </p>
    </Section>
  )
}

export default Showcase
