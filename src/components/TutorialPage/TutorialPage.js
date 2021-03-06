import * as React from 'react';
import PropTypes from 'prop-types';

import Page from '../Page';
import SpoilerBox from '../SpoilerBox';
import GoodiesSidebar from '../GoodiesSidebar';

import * as styles from './TutorialPage.module.css';

const TutorialPage = ({ page }) => (
  <Page title={page.frontmatter.title} updated={page.frontmatter.lastUpdated}>
    <div className={styles.tutorialTableOfContents}>
      <SpoilerBox title="Table of Contents">
        <div dangerouslySetInnerHTML={{ __html: page.tableOfContents }} />
      </SpoilerBox>
    </div>
    <div dangerouslySetInnerHTML={{ __html: page.html }} />
    <GoodiesSidebar />
  </Page>
);

TutorialPage.propTypes = {
  page: PropTypes.object.isRequired,
};

export default TutorialPage;
