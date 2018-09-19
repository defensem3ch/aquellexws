import * as React from 'react';
import PropTypes from 'prop-types';
import Konami from 'react-konami';

import Page from '../Page';
import Modal from '../Modal';

import * as styles from './Modal.module.css';

class SecretsModal extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { isOpen, label, children } = this.props;

    return (
      <div>
        <Konami easterEgg={() => this.setState({ isOpen: true })} />
        <Modal contentLabel={label} isOpen={this.state.isOpen}>
          <a onClick={() => this.setState({ isOpen: false })} className={styles.modalCloseButton}>
            [ CLOSE ]
          </a>
          <Page title="SECRETS" updated="2017-10-08T04:02:00.000Z">
            <p>Lunchwere is a closet furry :^)</p>

            <ul>
              <li>
                <a href="https://yadi.sk/d/xFbpH_YQ3NZkj9" target="_blank">
                  Ballistic Bunny
                </a>
              </li>
              <li>
                <a href="https://yadi.sk/d/BWU85Kb_3NZktg" target="_blank">
                  Crystal Chamber Combustion
                </a>
              </li>
              <li>
                <a href="https://yadi.sk/d/jIcQdAAx3NZm3u" target="_blank">
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
