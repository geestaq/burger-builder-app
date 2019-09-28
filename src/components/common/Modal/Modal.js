import React from 'react';
import Auxilliary from '../Auxilliary/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.scss';

const modal = (props) => (
  <Auxilliary>
    <Backdrop visible={props.visible} orderSummary={props.orderSummary}></Backdrop>
    <div className={props.visible ? 'modal show' : 'modal'}>
      {props.children}
    </div>
  </Auxilliary>
);

export default modal;
