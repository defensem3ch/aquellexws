import * as React from 'react';
import Link from 'gatsby-link';

import * as styles from './GoodiesSidebar.module.css';

const GoodiesSidebar = () => (
  <div className={styles.goodiesSidebar}>
    <div className={styles.goodiesSidebarTitle}>
      <h3>TUTORIALS</h3>
    </div>
    <div className={styles.goodiesSidebarContent}>
      <ul>
        <li>
          <Link to="/goodies/tutorial/game-boy-comparison">
            Game Boy comparison (better than Herbert Weixelbaum’s version)
          </Link>
        </li>
        <li>
          <Link to="/goodies/tutorial/famitracker-dubstep">
            FamiTracker dubstep tutorial by Dimeback
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default GoodiesSidebar;
