import React from 'react';
import BuildControl from '../BuildControl/BuildControl';
import './BuildControls.scss';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className='build-controls'>
    {controls.map(item => (
      <BuildControl
        key={item.label}
        label={item.label}
        added={() => props.ingredientAdded(item.type)}
        removed={() => props.ingredientRemoved(item.type)}
        disabled={props.disabled[item.type]} />
    ))}
  </div>
);

export default buildControls;
