import * as React from "react"
import { Link } from "gatsby";
import { Section } from "./styles"

const Showcase: React.FC = () => {
  return (
    <Section id="showcase">
        <p>
            
        </p>
        <p>
            I write software and improve my skills every day as a developer. <br/>
            <span style={{marginTop: '10px'}}>
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
