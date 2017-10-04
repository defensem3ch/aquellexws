import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import ResponsiveEmbed from 'react-responsive-embed'

import Page from '../components/Page'
import Music from '../components/Music'
import SpoilerBox from '../components/SpoilerBox'
import SoundCloudEmbedFrame from '../components/SoundCloudEmbedFrame'

const MusicPage = ({ data }) => {
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
        <Music
          title="Ballistic Bunny (feat. Kommisar)"
          genre="'Game Boy' Metal + Double Time Drum &amp; Bass"
        >
          <p>What started off as a fun idea in the middle of waiting for my next university tutorial, ended up becoming several hours of writer's block, heheheh! And since my good friend Kommisar and I were thinking of doing a collaboration of sorts, sending him the first minute of the project file was a fantastic move on my part for alleviating my writer's block, as he managed to come up with some sick trademark insaneous chiptune solos of his own. I took care of the main themes, drum programming & structuring, while he took care of his epic 3-minute solos. &#9829;</p>
          <p>We're doing a handful of these in the foreseeable future, by the way. Expect us!</p>
          <SpoilerBox>
            {/* ATTENTION: Note the /embed/id url. Also, this component's dimensions is hardcoded for YouTube */}
            <ResponsiveEmbed
              src="https://www.youtube.com/embed/TEAhoN7PfNc"
              allowfullscreen
            />
          </SpoilerBox>
          {/* ATTENTION #2: Only include the `src` attribute here. */}
          <SoundCloudEmbedFrame src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/337789973&amp;color=9633a0&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false" />
          <span>audio file unavailable until further notice &#8729; <a href="mailto:william.mon.98@gmail.com">e-mail me for project files</a></span>
        </Music>

        <Music
          title="Tachyon Beam Cannon"
          genre="'Game Boy' Breakcore + Speedcore + Impressionism"
        >
          <p>After finally recovering from severe emotional trauma in mid-June 2017, I went to work on my dream composition for ChipWIN 6. During my recovery period within the psychiatric hospital, I was listening to a lot of System Of A Down. Funnily enough, you could sing "She's Like Heroin" to some of the sections, and it'd fit in just fine. Of course, this composition demonstrates my fixation for writing concert-like études for the Game Boy as per usual. Fans of j-core will want to take note of this. &#9786;</p>
          <SpoilerBox>
            <ResponsiveEmbed
              src="https://www.youtube.com/embed/E5i9VbxD3yY"
              allowfullscreen
            />
          </SpoilerBox>
          <SoundCloudEmbedFrame src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/337537370&amp;color=9633a0&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false" />
          <span><a href="https://chiptuneswin.bandcamp.com/track/tachyon-beam-cannon" target="_blank">audio file</a> &#8729; <a href="http://2a03.free.fr/dl.php?file=5458" target="_blank">project files</a></span>
        </Music>
      </Page>
    </div>
  )
}

export default MusicPage

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
