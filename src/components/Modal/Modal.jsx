import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeImage);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeImage);
  }

  closeImage = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
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
