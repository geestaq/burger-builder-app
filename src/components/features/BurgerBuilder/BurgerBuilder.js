import React from 'react';
import Auxilliary from '../../common/Auxilliary/Auxilliary';
import Burger from '../../features/Burger/Burger';

class BurgerBuilder extends React.Component {

  render() {
    return (
      <Auxilliary>
        <Burger />
        <div>Build Controls</div>
      </Auxilliary>
    );
  }
}

export default BurgerBuilder;
