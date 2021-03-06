import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.css';

const Footer = ({ updated }) => {
  // Get current year during build time
  const formattedYear = new Date(updated).getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p>
          &copy; 2014-
          {formattedYear}, Aquellex
        </p>
        <p>
          HTML design by Aquellex &amp;{' '}
          <a href="https://twitter.com/TC_Halogen" target="_blank" rel="noopener noreferrer">
            TC_Halogen
          </a>
        </p>
        <p>
          Gatsby.js implementation by{' '}
          <a href="https://twitter.com/resir014" target="_blank" rel="noopener noreferrer">
            resir014
          </a>
        </p>
        <p>
          My E-mail: <a href="mailto:aquellex@f0xpa.ws">aquellex@f0xpa.ws</a>
        </p>
        <p>
          ABN: 38 843 406 545
        </p>
        <p></p><a href="https://thefurring.com//prev" target="_top">Last site</a> <a href="https://thefurring.com/"><img src="https://thefurring.com//assets/images/frlogo2.gif" alt="[FurRing - official site!]" border="0" WIDTH="134" HEIGHT="100"></img></a> <a href="https://thefurring.com//next" target="_top">Next Site</a>


      </div>
    </footer>
  );
};

Footer.propTypes = {
  updated: PropTypes.string.isRequired,
};

export default Footer;
