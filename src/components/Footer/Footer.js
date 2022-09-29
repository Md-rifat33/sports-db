import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer_title">Sports</h3>
      <div className="icons">
        <FontAwesomeIcon
          className="social_icon"
          icon={faFacebookF}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="social_icon"
          icon={faTwitter}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="social_icon"
          icon={faLinkedin}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="social_icon"
          icon={faInstagram}
        ></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default Footer
