import React from 'react'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <div>
    <Helmet
      title={siteMetadata.title}
      meta={[
        { name: 'description', content: siteMetadata.description }
      ]}
    />
    <h1>404: NOT FOUND</h1>
    <p><img src="/img/tenshi.gif" /></p>
  </div>
)

export default NotFoundPage
