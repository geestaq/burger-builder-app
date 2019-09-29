import React from 'react';
import './Button.scss';

const button = (props) => (
  <button onClick={props.clicked} className={['btn', props.type].join(' ')}>
    {props.children}
  </button>
);

export default button;
