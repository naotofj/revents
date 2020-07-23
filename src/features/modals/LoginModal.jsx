import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import LoginForm from '../auth/Login/LoginForm';
import { closeModal } from './modalActions';

const actions = { closeModal };

const mapState = (state) => ({
  loading: state.async.loading,
});

class LoginModal extends Component {
  render() {
    const { loading } = this.props;
    return (
      <Modal size='mini' open={true} onClose={this.props.closeModal}>
        <Modal.Header>Login to Re-vents</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <LoginForm loading={loading}/>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(mapState, actions)(LoginModal);
