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
    const { visible } = this.state;

    return (
      <div className={styles.spoilerBox}>
        <button
          type="button"
          className={styles.spoilerBoxToggle}
          onClick={() => {
            this.setState({ visible: !visible });
          }}
        >
          {title}
        </button>
        <div
          className={styles.spoilerBoxContent}
          style={{
            display: visible ? 'block' : 'none',
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
  children: PropTypes.node.isRequired,
};

export default SpoilerBox;
