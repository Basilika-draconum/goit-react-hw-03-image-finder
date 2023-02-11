import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  render() {
    const { children } = this.props;
    return createPortal(
      <div className={css.overlay}>
        <div className={css.modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}
