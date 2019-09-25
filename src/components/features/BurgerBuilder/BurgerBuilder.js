import React from 'react';
import Auxilliary from '../../common/Auxilliary/Auxilliary';
import Burger from '../../features/Burger/Burger';
import BuildControls from '../../features/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 2,
  cheese: 4,
  meat: 5,
  bacon: 4
};

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 5
    }
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = newCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) return;
    const newCount = oldCount - 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = newCount;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
  }

  render() {
    const disabledInfo = {...this.state.ingredients};
    for(let i in disabledInfo) {
      disabledInfo[i] = disabledInfo[i] <= 0;
    }

    return (
      <Auxilliary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo} />
      </Auxilliary>
    );
  }
}

export default BurgerBuilder;
