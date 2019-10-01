import React from 'react';
import Logo from '../../common/Logo/Logo';
import NavigationItems from '../../common/NavigationItems/NavigationItems';
import './SideDrawer.scss';

const sideDrawer = (props) => {
  //...

  return (
    <div className='side-drawer'>
      <div className='logo-wrapper'>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
