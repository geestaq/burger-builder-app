import React from 'react';
import Auxilliary from '../../common/Auxilliary/Auxilliary';
import './Layout.scss';

const layout = (props) => (
  <Auxilliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="content">
      {props.children}
    </main>
  </Auxilliary>
);

export default layout;
