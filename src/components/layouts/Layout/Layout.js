import React from 'react';
import Auxilliary from '../../common/Auxilliary/Auxilliary';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import './Layout.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerVisible: false
    }
  }

  menuVisibilityHandler = (show) => {
    this.setState({
      sideDrawerVisible: show
    })
  }

  toggleMenuVisibilityHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerVisible: !prevState.sideDrawerVisible };
    });
  }

  render() {

    return (
      <Auxilliary>
        <Toolbar toggleSideDrawer={this.toggleMenuVisibilityHandler} />
        <SideDrawer
          hideSideDrawer={() => this.menuVisibilityHandler(false)}
          visible={this.state.sideDrawerVisible} />
        <main className="content">
          {this.props.children}
        </main>
      </Auxilliary>
    );
  }
}

export default Layout;
