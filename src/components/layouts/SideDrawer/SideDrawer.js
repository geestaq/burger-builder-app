import React from 'react';
import Logo from '../../common/Logo/Logo';
import NavigationItems from '../../common/NavigationItems/NavigationItems';
import Auxilliary from '../../common/Auxilliary/Auxilliary';
import Backdrop from '../../common/Backdrop/Backdrop';
import './SideDrawer.scss';

const sideDrawer = (props) => {
  //...

  return (
    <Auxilliary>
      <Backdrop
        visible={props.visible}
        clicked={props.hideSideDrawer}/>
      <div className={props.visible ? 'side-drawer open' : 'side-drawer close'}>
        <div className='logo-wrapper'>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxilliary>
  );
};

export default sideDrawer;
