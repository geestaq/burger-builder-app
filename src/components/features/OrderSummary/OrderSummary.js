import React from 'react';
import Auxilliary from '../../common/Auxilliary/Auxilliary';

const orderSummary = (props) => {
  let ingredientsSummary = [];
  for(let i in props.ingredients) {
    ingredientsSummary.push(<li key={i}><span className="capitalize bold">{i}</span> x{props.ingredients[i]}</li>);
  }

  return (
    <Auxilliary>
      <h3>Your Order</h3>
      <p>A deliciuos burger with the following ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>Continue to checkout?</p>
    </Auxilliary>
  );
}

export default orderSummary;
