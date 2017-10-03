import React from 'react'
import Link from 'gatsby-link'

import MinorUpdates from '../components/MinorUpdates/MinorUpdates'

const IndexPage = () => (
  <div>
    <h2>NEWS</h2>
    <span>Site updates:</span><br />
    <MinorUpdates />
    <div style={{
      marginTop: '.5rem'
    }}>
      <h3>25.08.2017 // Added spoiler tags to YouTube Videos in the music section</h3>
      <p>I realised how much memory is consumed when trying to load too many embedded videos in one page. Hopefully, adding a spoiler tag can alleviate memory problems. If problems still persist, do not hestitate to get in touch with me. You may also want to try refreshing the cache (Ctrl+F5) first, however. Cheers!</p>

      <h3>25.08.2017 // Moved to Crazy Domains for hosting!</h3>
      <p>Welcome!</p>
    </div>
  </div>
)

export default IndexPage
