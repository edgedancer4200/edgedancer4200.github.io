import React from 'react'
import { Divisor, Info } from './style'
import { Link } from 'react-scroll'

// data
import data from '../../../data.json'

const Footer: React.FC = () => {
  return (
        <Divisor>
            <Info>{ data.footer.main }</Info>
            <Info>{ data.footer.secondary }</Info>
            <Link to="showcase" smooth={true}>
                back to top
            </Link>
        </Divisor>
  )
}

export default Footer
