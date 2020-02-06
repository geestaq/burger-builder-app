import React from 'react';
import Auxilliary from '../Auxilliary/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.scss';

class Modal extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    //poprawa wydajnosci komponentu - render tylko przy zmianie widzialnosci
    return nextProps.visible !== this.props.visible || nextProps.children !== this.props.children;
  }

  render() {
    return (
      <Auxilliary>
        <Backdrop visible={this.props.visible} clicked={() => this.props.orderSummary(false)}></Backdrop>
        <div className={this.props.visible ? 'modal show' : 'modal'}>
          {this.props.children}
        </div>
      </Auxilliary>
    );
  }
}

export default Modal;
