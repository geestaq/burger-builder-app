import React from 'react';
import Auxilliary from '../../common/Auxilliary/Auxilliary';
import Toolbar from '../Toolbar/Toolbar';
import './Layout.scss';

const layout = (props) => (
  <Auxilliary>
    <Toolbar />
    <main className="content">
      {props.children}
    </main>
  </Auxilliary>
);

export default layout;
