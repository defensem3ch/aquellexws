import React from 'react'
import Link from 'gatsby-link'

import MinorUpdates from '../components/MinorUpdates'

const IndexPage = () => (
  <div>
    <h2>NEWS</h2>

    <span>Site updates:</span><br />
    <MinorUpdates>
      <p>30.09.2017 // Changed web rating from G-PG to PG-14 because of my social media links. Also changed my contact e-mail to aquellex@f0xpa.ws.</p>
      <p>24.08.2017 // The basic premise in ABOUT is ripe and ready to go!</p>
      <p>24.08.2017 // Originals section in MUSIC is ripe and ready to go!</p>
      <p>23.08.2017 // Almost done constructing the skeleton of the whole webpage.</p>
      <p>16.08.2017 // Started the website as a "test of waters". Hosted by Neocities for the time being.</p>
    </MinorUpdates>

    <div style={{
      marginTop: '1rem'
    }}>
      <h3>25.08.2017 // Added spoiler tags to YouTube Videos in the music section</h3>
      <p>I realised how much memory is consumed when trying to load too many embedded videos in one page. Hopefully, adding a spoiler tag can alleviate memory problems. If problems still persist, do not hestitate to get in touch with me. You may also want to try refreshing the cache (Ctrl+F5) first, however. Cheers!</p>

      <h3>25.08.2017 // Moved to Crazy Domains for hosting!</h3>
      <p>Welcome!</p>
    </div>
  </div>
)

export default IndexPage
