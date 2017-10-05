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
      <h2>MUSIC</h2>
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

      <Music
        title="Decipher.#003"
        genre="'Game Boy' Breakcore + Speedcore"
      >
        <p>Originally started on October 2015 as a means to mimic the structuring from Renard's Banned Forever and one of the lead programming techniques used for YZYX's Gravity Distortion's main motif. Didn't finish until February 2017 in time for Square Sounds Melbourne 2017 pre-party. That was an awesome night. Glad I was able to finally put this étude to rest.</p>
        <p>You might be interested where the alternate title "Hatred of Renard" comes from. That comes from an object named "Hatred of Goku", which is used for unlocking certain characters in Dragon Ball Z Budokai Tenkaichi 2.</p>
        <p>Also going to be a part of my upcoming LP. &#9786;</p>
        <SpoilerBox>
          <ResponsiveEmbed
            src="https://www.youtube.com/embed/N9TNIYETSXQ"
            allowfullscreen
          />
        </SpoilerBox>
        <SoundCloudEmbedFrame src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313709199&amp;color=9633a0&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false" />
        <span><a href="https://soundcloud.com/aquellex/hatred-of-renard" target="_blank">audio file</a> (click on 'more' > 'download') &#8729; <a href="mailto:william.mon.98@gmail.com">e-mail me for project files</a></span>
      </Music>

      <Music
        title="Crystal Chamber Combustion"
        genre="'Game Boy' Speedcore"
      >
        <p>I was invited to take part of a local radio show that hosts all kinds of eccentric music (sound art, IDM, breakcore, ambient, drone, the whole lot etc.). Due to university and HalloWIN commitments, I almost wasn't able to contribute anything at all, but then I set aside a full day to compose something really cool just relying on lydian chords and quartal harmonies, and this was the result. Still one of my personal favourites to this day. &#9786;</p>
        <SpoilerBox>
          <ResponsiveEmbed
            src="https://www.youtube.com/embed/mfuh3NwtO4M"
            allowfullscreen
          />
        </SpoilerBox>
        <SoundCloudEmbedFrame src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/291092079&amp;color=9633a0&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false" />
        <span><a href="https://subsequenceradio.bandcamp.com/track/crystal-chamber-combustion" target="_blank">audio file</a> (donate, or <a href="mailto:william.mon.98@gmail.com">ask</a>) &#8729; <a href="mailto:william.mon.98@gmail.com">e-mail me for project files</a></span>
      </Music>

      <Music
        title="Wanderflux"
        genre="'Game Boy' Breakcore + Speed Drum &amp; Bass"
      >
        <p>I had a lot of fun composing this dream track for ChipWIN 5. Draws a lot of inspiration from YZYX's -flux series and music you'd expect from rhythm game simulations (BMS). Contains a reference to The Quick Brown Fox's Wanderlust as a jab towards a trolling tactic on Tumblr where 2 people thought it was funny to make parody names of a LapFox-inspired netlabel (one I was a part of, as well). I had my fun as well. &#9786;</p>

        <SpoilerBox>
          <ResponsiveEmbed
            src="https://www.youtube.com/embed/cvoLXNJFzsw"
            allowfullscreen
          />
        </SpoilerBox>
        <SoundCloudEmbedFrame src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/274331592&amp;color=9633a0&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false" />
        <span><a href="https://chiptuneswin.bandcamp.com/track/wanderflux" target="_blank">audio file</a> &#8729; <a href="http://2a03.free.fr/dl.php?file=5193">project files</a></span>
      </Music>

      <Music
        title="Candy Explosion"
        genre="'Game Boy' IDM + Breakcore"
      >
        <p>The composition that kickstarted my chipbreaking career. Also serves as an étude + ode to YZYX's ._Pulse. So many great memories spending time composing this beast. Also, if you've played the 2nd or 3rd Ratchet &amp; Clank PS2 games, you'll recognise a familiar sound effect somewhere...&#9829;</p>

        <SpoilerBox>
          <ResponsiveEmbed
            src="https://www.youtube.com/embed/goSl4YTnwv8"
            allowfullscreen
          />
        </SpoilerBox>
        <SoundCloudEmbedFrame src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/262626889&amp;color=9633a0&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false" />
        <span><a href="https://soundcloud.com/aquellex/candy-explosion" target="_blank">audio file</a> (click on 'more' > 'download') &#8729; <a href="http://2a03.free.fr/dl.php?file=5167">project files</a></span>
      </Music>
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
