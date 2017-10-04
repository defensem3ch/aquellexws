import React from 'react'
import PropTypes from 'prop-types'

const SoundCloudEmbedFrame = ({ src }) => (
  <iframe width="100%" maxWidth="100%" height="166" scrolling="no" frameBorder="no" src={src} />
)

SoundCloudEmbedFrame.propTypes = {
  src: PropTypes.string
}

export default SoundCloudEmbedFrame
