import React from 'react'
import MailIcon from 'mdi-react/MailIcon'
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon'
import LinkedinBoxIcon from 'mdi-react/LinkedinBoxIcon'
import GithubCircleIcon from 'mdi-react/GithubCircleIcon'


const footerStyle = {backgroundColor: 'white', paddingBottom: '30px'}
const Footer = props => {
  return (
    <footer className={props.theme ? 'footer dark-footer' : 'footer'} style={footerStyle}>
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered-mobile">
            <strong>Designed & Developed by Sanket Panda ✌️</strong>
          </div>
          <div className="column is-hidden-mobile"/>
          <div className="column has-text-centered-mobile has-text-right">
            <span className="has-text-info">
              <a href="mailto:pandasa@umich.edu">
                <span className="icon">
                 <MailIcon/>
                </span>
              </a>
              &nbsp;
              <a href="https://linkedin.com/in/sanketpanda/">
                <span className="icon">
                  <LinkedinBoxIcon/>
                </span>
              </a>
              &nbsp;
              <a href="http://facebook.com/pandasa123">
                <span className="icon">
                  <FacebookBoxIcon/>
                </span>
              </a>
              &nbsp;
              <a href="https://github.com/pandasa123">
                <span className="icon">
                  <GithubCircleIcon/>
                </span>
              </a>
              {/*&nbsp;*/}
              {/*<span className="icon">*/}
              {/*  <FontAwesomeIcon icon={faCode} size="lg"/>*/}
              {/*</span>*/}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
