import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

import styles from './PageWithSidebar.module.css';

const PageWithSidebar = ({ title, updated, children }) => (
  <article>
    {children}
    <PageFooter updated={updated} />
  </article>
);

PageWithSidebar.propTypes = {
  title: PropTypes.string.isRequired,
  updated: PropTypes.string,
  children: PropTypes.element,
};

export default PageWithSidebar;
