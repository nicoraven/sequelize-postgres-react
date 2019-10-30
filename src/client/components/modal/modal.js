/* eslint-disable react/prop-types */
import React from 'react';

import { ModalProvider } from '../../utils/modalcontext';
import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="modal-button" type="button" onClick={handleClose}>X</button>
        <ModalProvider value="hello">
          {children}
        </ModalProvider>
      </section>
    </div>
  );
};

export default Modal;
