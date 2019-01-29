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

  /*
  render() {
    const { label } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <Konami konami={[65, 78, 84, 72, 82, 79, 80, 79, 77, 79, 82, 80, 72, 79, 83, 73, 83]}
          easterEgg={() => this.setState({ isOpen: true })} />
        <Modal contentLabel={label} isOpen={isOpen}>
          <button
            type="button"
            onClick={() => this.setState({ isOpen: false })}
            className={styles.modalCloseButton}
          >
            [ CLOSE ]
        </button>
          <Page title="ANTHROPOMORPHOSIS" updated="2019-01-25T04:02:00.000Z">
            01. Excitement - Intro<br></br>
            02. Promenade - Study on YZYX's Gravity Distortion (fakeout only)<br></br>
            03. Decipher.#003 - Study on Renard's Banned Forever & YZYX's Gravity Distortion<br></br>
            04. Decipher.#004 - Study on Renard's Jeepers & YZYX's Uncontrollable Advance<br></br>
            05. Shimmering Glimmer - Study on Neverball & Neverputt's Primary Theme<br></br>
            06. Ballistic Bunny (feat. Kommisar) - seldom a study
            07. Dragonflux - Study on YZYX's Powerflux<br></br>
            08. Crystal Chamber Combustion Expansion - Study on YZYX's Powerflux<br></br>
            09. Candy Explosion (REV V1.2) - Study on YZYX's ._Pulse<br></br>
            10. Megaflux - Study on m1dy's Noraika<br></br>
            11. Hyperflux - Study on Kurorak's Major Video Card Performance Warning<br></br>
            12. Anthropomorphosis - Study on Yuuyu's Scrap Syndrome & paraoka's Chaosmaid<br></br>
            13. Exit Clause - Outro<br></br>
          </Page>
        </Modal>
      </div>
    );
  }*/
}

export default SecretsModal;
