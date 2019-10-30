/* eslint-disable react/prop-types */
import React from 'react';

import { Provider as DataProvider } from '../../utils';
import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="modal-button" type="button" onClick={handleClose}>X</button>
        <DataProvider value={handleClose}>
          {children}
        </DataProvider>
      </section>
    </div>
  );
};

export default Modal;
