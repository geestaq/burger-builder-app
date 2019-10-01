import React from 'react';
import Auxilliary from '../../common/Auxilliary/Auxilliary';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import './Layout.scss';

const layout = (props) => (
  <Auxilliary>
    <Toolbar />
    <SideDrawer />
    <main className="content">
      {props.children}
    </main>
  </Auxilliary>
);

export default layout;
