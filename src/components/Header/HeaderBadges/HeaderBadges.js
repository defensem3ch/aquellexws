import React from 'react';

import styles from './HeaderBadges.module.css';

const HeaderBadges = () => (
  <div className={styles.headerBadges}>
    <a href="https://facebook.com/aquellex" title="Facebook Fan Page" target="_blank" rel="noopener noreferrer">
      <img alt="Facebook" src="/aquellexws/img/yomieda/ico_facebook.png" />
    </a>{' '}
    <a href="https://twitter.com/Aquellex" title="Personal Twitter" target="_blank" rel="noopener noreferrer">
      <img alt="Twitter" src="/aquellexws/img/yomieda/ico_twitter.png" />
    </a>{' '}
    <a href="https://soundcloud.com/aquellex" title="SoundCloud" target="_blank" rel="noopener noreferrer">
      <img alt="SoundCloud" src="/aquellexws/img/yomieda/ico_soundcloud.png" />
    </a>{' '}
    <a href="https://youtube.com/user/GammaBlasterSM" title="YouTube" target="_blank" rel="noopener noreferrer">
      <img alt="YouTube" src="/aquellexws/img/yomieda/ico_youtube.png" />
    </a>{' '}
    <a href="https://discord.io/psgcabal" title="Discord (PSG theory)" target="_blank" rel="noopener noreferrer">
      <img alt="Discord" src="/aquellexws/img/yomieda/ico_discord-l.png" />
    </a><a href="https://discord.io/fourthmodulator" title="Discord (FM synthesis)" target="_blank" rel="noopener noreferrer">
      <img alt="Discord" src="/aquellexws/img/yomieda/ico_discord-r.png" />
    </a>{' '}
    <a href="http://www.mabsland.com/Adoption.html" title="Mild themes" target="_blank" rel="noopener noreferrer">
      <img alt="PG rating" src="/aquellexws/img/Censor_PGc.gif" />
    </a>
    <a href="http://www.mabsland.com/Adoption.html" title="Profanity may appear in external links" target="_blank" rel="noopener noreferrer">
      <img alt="14+ rating" src="/aquellexws/img/Censor_14c.gif" />
    </a>
  </div>
);

export default HeaderBadges;
