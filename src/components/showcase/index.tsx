import * as React from 'react'

// styles
import { Section } from './style'

// data
import data from '../../../data.json'

const Showcase: React.FC = () => {
  return (
    <Section id="showcase">
        <h1>{ data.header.content }</h1>
    </Section>
  )
}

export default Showcase
