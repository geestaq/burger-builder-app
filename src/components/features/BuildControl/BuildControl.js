import React from 'react';
import './BuildControl.scss';

const buildControl = (props) => (
  <div className='build-control'>
    <div className='label'>{props.label}</div>
    <button className='btn-ingredient less'>Less</button>
    <button className='btn-ingredient more' onClick={props.added}>More</button>
  </div>
);

export default buildControl;
