import React from 'react';
import Logo from '../../common/Logo/Logo';
import NavigationItems from '../../common/NavigationItems/NavigationItems';
import './Toolbar.scss';

const toolbar = (props) => (
  <header className='toolbar'>
    <div>MENU</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
