import * as React from 'react';
import PropTypes from 'prop-types';
import Konami from 'react-konami';

import Page from '../Page';
import Modal from '../Modal';

import * as styles from './Modal.module.css';

class SecretsModal extends React.Component {
  static propTypes = {
    label: PropTypes.string,
  };

  static defaultProps = {
    label: null,
  };

  constructor() {
    super();

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { label } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <Konami easterEgg={() => this.setState({ isOpen: true })} />
        <Modal contentLabel={label} isOpen={isOpen}>
          <button
            type="button"
            onClick={() => this.setState({ isOpen: false })}
            className={styles.modalCloseButton}
          >
            [ CLOSE ]
          </button>
          <Page title="SECRETS" updated="2017-10-08T04:02:00.000Z">
            <p>Lunchwere is a closet furry :^)</p>

            <ul>
              <li>
                <a
                  href="https://yadi.sk/d/xFbpH_YQ3NZkj9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ballistic Bunny
                </a>
              </li>
              <li>
                <a
                  href="https://yadi.sk/d/BWU85Kb_3NZktg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Crystal Chamber Combustion
                </a>
              </li>
              <li>
                <a
                  href="https://yadi.sk/d/jIcQdAAx3NZm3u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Decipher.#003
                </a>
              </li>
            </ul>

            <p>Please keep this page an easter egg! &#9786;</p>
          </Page>
        </Modal>
      </div>
    );
  }
}

export default SecretsModal;
