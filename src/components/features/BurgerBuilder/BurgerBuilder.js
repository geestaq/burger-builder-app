import React from 'react';
import Auxilliary from '../../common/Auxilliary/Auxilliary';
import Burger from '../../features/Burger/Burger';

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        salad: 1,
        cheese: 2,
        meat: 1,
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
