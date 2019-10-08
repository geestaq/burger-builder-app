import React from 'react';
import Logo from '../../common/Logo/Logo';
import NavigationItems from '../../common/NavigationItems/NavigationItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';
import './Toolbar.scss';

const toolbar = (props) => (
  <header className='toolbar'>
    <DrawerToggle click={props.toggleSideDrawer}/>
    <div className='logo-wrapper'>
      <Logo />
    </div>
    <nav className='desktop-only'>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
