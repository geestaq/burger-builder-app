import React from 'react';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import './Burger.scss';

const burger = (props) => {
  const transformIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    });
console.log(transformIngredients);

  return (
    <div className='burger'>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
