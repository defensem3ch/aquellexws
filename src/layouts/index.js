import React from 'react'
import PropTypes from 'prop-types'
import Link, { navigateTo } from 'gatsby-link'
import Helmet from 'react-helmet'

// React components
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import SecretsModal from '../components/SecretsModal'

import 'normalize.css'
import '../fonts/pxplus_ibm_vga8.css'
import '../styles/globals.css'

import styles from './index.module.css'

class TemplateWrapper extends React.Component {
  constructor () {
    super()
  }

  render () {
    const { siteMetadata, buildTime } = this.props.data.site
    const { children } = this.props

    return (
      <div className="content">
        <Container>
          <div className={styles.siteWrapper}>
            <Helmet
              title={siteMetadata.title}
              meta={[
                { name: 'description', content: siteMetadata.description },
                { name: 'keywords', content: 'sample, something' },
              ]}
            />
            <SecretsModal />
            <Header />
            <div>
              {children()}
            </div>
          </div>
          <Footer updated={buildTime} />
        </Container>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  data: PropTypes.object,
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
          email
        }
      }
      buildTime
    }
  }
`
