import * as React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'

class SecretsModal extends React.Component {
  constructor () {
    super()

    this.state = {
      isOpen: false
    }
  }

  render () {
    const { isOpen, label, children } = this.props

    return (
      <div>
        <button onClick={() => this.setState({ isOpen: true })}>Open</button>
        <Modal contentLabel={label} isOpen={this.state.isOpen}>
          <h1>Hallo!</h1>
          <button onClick={() => this.setState({ isOpen: false })}>Close</button>
        </Modal>
      </div>
    )
  }
}

export default SecretsModal
