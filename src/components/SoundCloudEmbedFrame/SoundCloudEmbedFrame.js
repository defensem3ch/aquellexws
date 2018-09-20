import React from 'react';
import PropTypes from 'prop-types';

const SoundCloudEmbedFrame = ({ src, title }) => (
  <iframe
    title={title}
    width="100%"
    maxWidth="100%"
    height="166"
    scrolling="no"
    frameBorder="no"
    src={src}
  />
);

SoundCloudEmbedFrame.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
};

SoundCloudEmbedFrame.defaultProps = {
  title: null,
};

export default SoundCloudEmbedFrame;
