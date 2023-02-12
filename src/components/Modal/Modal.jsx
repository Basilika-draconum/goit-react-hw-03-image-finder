import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './modal.module.scss';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeImage);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeImage);
  }

  closeImage = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.props.closeImage();
    }
  };

  render() {
    const { children, closeImage } = this.props;
    return createPortal(
      <div className={css.overlay} onClick={closeImage}>
        <div className={css.modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  closeImage: PropTypes.func.isRequired,
};
