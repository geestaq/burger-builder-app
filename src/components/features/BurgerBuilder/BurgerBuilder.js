import React from 'react';
import Auxilliary from '../../common/Auxilliary/Auxilliary';
import Burger from '../../features/Burger/Burger';

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      }
    }
  }

  render() {
    return (
      <Auxilliary>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Auxilliary>
    );
  }
}

export default BurgerBuilder;
