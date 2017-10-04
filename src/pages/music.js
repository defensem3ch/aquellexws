import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import ResponsiveEmbed from 'react-responsive-embed'

import Page from '../components/Page/Page'
import SpoilerBox from '../components/SpoilerBox/SpoilerBox'

const Music = ({ data }) => {
  const { siteMetadata, buildTime } = data.site
  return (
    <div>
      <Helmet
        title={`MUSIC · ${siteMetadata.title}`}
        meta={[
          { name: 'description', content: '' },
          { name: 'author', content: siteMetadata.author.name }
        ]}
      />
      <Page title="MUSIC" updated={buildTime}>
        <h3>ORIGINALS</h3>
        <h4>Ballistic Bunny (feat. Kommisar)</h4> &#8729; 'Game Boy' Metal + Double Time Drum & Bass

        <p>What started off as a fun idea in the middle of waiting for my next university tutorial, ended up becoming several hours of writer's block, heheheh! And since my good friend Kommisar and I were thinking of doing a collaboration of sorts, sending him the first minute of the project file was a fantastic move on my part for alleviating my writer's block, as he managed to come up with some sick trademark insaneous chiptune solos of his own. I took care of the main themes, drum programming & structuring, while he took care of his epic 3-minute solos. &#9829;</p>
        <p>We're doing a handful of these in the foreseeable future, by the way. Expect us!</p>


        <SpoilerBox>
          {/* ATTENTION: Note the /embed/id url. */}
          <ResponsiveEmbed
            src="https://www.youtube.com/embed/TEAhoN7PfNc"
            allowfullscreen
          />
        </SpoilerBox>
        <Link to="/">Go back to the homepage</Link>
      </Page>
    </div>
  )
}

export default Music

export const query = graphql`
  query MusicPageQuery {
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
