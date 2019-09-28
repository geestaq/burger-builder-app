import React from 'react';
import './Backdrop.scss';

const backdrop = (props) => (
  props.visible ? <div className='backdrop' onClick={() => props.orderSummary(false)}></div> : null
);

export default backdrop;
