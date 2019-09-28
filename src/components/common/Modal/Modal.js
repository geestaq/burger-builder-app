import React from 'react';
import './Modal.scss';

const modal = (props) => (
  <div className={props.visible ? 'modal show' : 'modal'}>
    {props.children}
  </div>
);

export default modal;
