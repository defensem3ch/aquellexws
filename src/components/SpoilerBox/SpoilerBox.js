import * as React from 'react';
import * as PropTypes from 'prop-types';

import styles from './SpoilerBox.module.css';

class SpoilerBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  render() {
    const { title, children } = this.props;

    return (
      <div className={styles.spoilerBox}>
        <a
          className={styles.spoilerBoxToggle}
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          {title}
        </a>
        <div
          className={styles.spoilerBoxContent}
          style={{
            display: this.state.visible ? 'block' : 'none',
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

SpoilerBox.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SpoilerBox;
