import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Page from '../components/Page'
import MinorUpdates from '../components/MinorUpdates'
import NewsUpdates from '../components/NewsUpdates'
import TemplateWrapper from '../layouts';

const IndexPage = ({ data }) => (
  <TemplateWrapper>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="og:title" content="NEWS" />
      <meta property="og:description" content={data.site.siteMetadata.description} />
    </Helmet>
    <Page title="NEWS"></Page>
    <span>Gigs (green for upcoming, red for occurring/occurred + DD.MM.YYYY):</span><br />
    <MinorUpdates>
    <p><font color="lime">17.09.2018</font> // <a href="https://www.facebook.com/events/2269368509949414/" target="_blank">Square Sounds Tokyo 2018 Post-Party</a></p>
      <p><font color="red">04.05.2018</font> // <a href="https://visitcanberra.com.au/events/5acb022d693d348c764fb7a6/maze-contemporary-art-party" target="_blank">MAZE: Contemporary Art Party</a> </p>
      <p><font color="red">23.02.2018 - 25.02.2018</font> // <a href="http://melbourne.squaresoundsfestival.com/2018/about.html" target="_blank">Square Sounds Melbourne 2018</a> </p>
      <p><font color="red">02.03.2017</font> // <a href="https://www.facebook.com/SquareSounds/videos/1236363983065586/" target="_blank">Square Sounds Melbourne 2017 Pre-Party</a> </p>
    </MinorUpdates>

    <span>Site updates:</span><br />
    <MinorUpdates>
      <p>12.09.2018 // Game Boy sound comparison page updated to 0.9.4a. lsdpack is awesome!</p>
      <p>01.05.2018 // Sorry for radio silence and short notice of a gig on May 4th, I've been busy with life lately! Major update soon + updated Game Boy Comparison page to 0.9.4.</p>
      <p>30.01.2018 // Fixed audio preloading on tutorial pages. Thanks resir014!</p>
      <p>07.01.2018 // Updated the Game Boy Comparison page to 0.9.3.</p>
      <p>27.11.2017 // Added one past gig to 'Gigs' and updated the Game Boy Comparison page to 0.9.2.</p>
      <p>25.11.2017 // Using <a href="https://twitter.com/thetigerinspace" target="_blank">tigerinspace</a>'s mascot drawing in /about and added the 'Gigs' module above.</p>
      <p>11.11.2017 // Updated /goodies to include descrptions, /goodies/tutorial/famitracker-dubstep with examples and /goodies/tutorial/game-boy-comparison with DS Lite recordings.</p>
      <p>01.11.2017 // Added DEFENSE MECHANISM's LSDJ upgrade cheat sheet to /goodies.</p>
      <p>21.10.2017 // Added Ko-Fi link in /about + a few new tutorial scaffolds.</p>
      <p>30.09.2017 // Changed web rating from G-PG to PG-14 because of my social media links. Also changed my contact e-mail to aquellex@f0xpa.ws.</p>
      <p>24.08.2017 // The basic premise in ABOUT is ripe and ready to go!</p>
      <p>24.08.2017 // Originals section in MUSIC is ripe and ready to go!</p>
      <p>23.08.2017 // Almost done constructing the skeleton of the whole webpage.</p>
      <p>16.08.2017 // Started the website as a "test of waters". Hosted by Neocities for the time being.</p>
    </MinorUpdates>

    <NewsUpdates>
      <h3>12.09.2018 // Square Sounds Tokyo 2018 coming up soon!</h3>
      <p>About time I updated the frontpage properly! Information can be found in the Gigs module above. Sorry for being on super short notice, cheapshot (the organiser) was undergoing some stress and there was miscommunication when I placed my name for a chance to perform at the sideparties. Fortunately, everything's been resolved in the nick of time, heheh!
      </p>
      <h3>07.02.2018 // Square Sounds Melbourne 2018 coming up soon!</h3>
      <p>Friendly reminder that I will be performing @ 24 Moons for Square Sounds Melbourne 2018! I'm on @ 10:00pm on the 23rd of February, Friday night. More info about the gig can be found <a href="http://melbourne.squaresoundsfestival.com/2018/about.html" target="_blank">here!</a> Acquire tickets <a href="https://events.ticketbooth.com.au/event/ssm2018" target="_blank">here</a>.
      </p>
      <p>I will also be hosting a 90-minute masterclass regarding advanced LSDJ techniques @ the Northcote Library meeting room on the 24th of February, Saturday afternoon (3:00pm). More info on that <a href="http://melbourne.squaresoundsfestival.com/2018/other-events.html" target="_blank">here</a>.</p>
      <h3>07.10.2017 // Moved to Netlify for hosting and implemented Gatsby.js &amp; React.js!</h3>
      <p>Special thanks to <a href="https://twitter.com/resir014" target="blank">resir014</a> for spending his free time helping me out making my site better! He also made the website more responsive for mobile devices. &#9786;</p>
      <h3>25.08.2017 // Added spoiler tags to YouTube Videos in the music section</h3>
      <p>I realised how much memory is consumed when trying to load too many embedded videos in one page. Hopefully, adding a spoiler tag can alleviate memory problems. If problems still persist, do not hestitate to get in touch with me. You may also want to try refreshing the cache (Ctrl+F5) first, however. Cheers!</p>

      <h3>25.08.2017 // Moved to Crazy Domains for hosting!</h3>
      <p>Welcome!</p>
    </NewsUpdates>
  </TemplateWrapper>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
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
