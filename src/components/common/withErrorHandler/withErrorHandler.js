import React, { Component } from 'react';

import Modal from '../Modal/Modal';
import Aux from '../Auxilliary/Auxilliary';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    UNSAFE_componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.respInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      })
    }

    componentWillUnmount() {
      //usuniecie interceptorow przy usuwaniu komponentu - nie zajmuja pamieci
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.respInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Aux>
          <Modal visible={this.state.error} orderSummary={this.errorConfirmedHandler}>
            Something went wrong!<br/>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
};

export default withErrorHandler;
