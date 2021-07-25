import React from 'react'
import { useIntersection } from 'react-use'
import { Tween } from 'react-gsap'

// styles
import { Section } from './style'

// data
import data from '../../../data.json'

const Banner: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null)

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '200px',
    threshold: 0.8
  })

  const FadeIn: React.FC = () => {
    return (
        <Tween to={{ opacity: 1, y: -60, ease: 'power4.out' }} duration={2}>
            <h3>
              { data.banner.content }
            </h3>
        </Tween>
    )
  }

  const FadeOut: React.FC = () => {
    return (
        <Tween to={{ opacity: 0, ease: 'power4.out' }} duration={2}>
            <h3>
            { data.banner.content }
            </h3>
        </Tween>
    )
  }

  return (
    <Section id="banner" ref={ sectionRef }>
      {
          intersection && intersection.intersectionRatio < 0.8
            ? <FadeOut/>
            : <FadeIn/>
      }
    </Section>
  )
}

export default Banner
