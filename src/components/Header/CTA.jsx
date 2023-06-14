// eslint-disable-next-line no-unused-vars
import React from 'react'
import CV from '../../assets/My CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a className='button-main' href={CV} download>Download CV</a>
        <a className='button-main' href="#contact">Reach me</a>
    </div>
  )
}

export default CTA