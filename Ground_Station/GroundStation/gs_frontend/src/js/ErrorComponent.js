import React from 'react';

const withErrorHandling = WrappedComponent => ({ showError, children }) => {
  return (
    <WrappedComponent>
      {showError && <div className="error-message">Oops! Something went wrong!</div>}
      {children}
    </WrappedComponent>
  );
};

const DivWithErrorHandling = withErrorHandling(({children}) => <div>{children}</div>)


class App extends React.Component {
  state = { showError: true }
  
  toggleError = () => {
    this.setState((prevState, props) => {
      return { showError: !prevState.showError }
    })
  };
  
  render() {
    return (
      <DivWithErrorHandling showError={this.state.showError}>
        <h1>Your Amazing Content</h1>
        <button onClick={this.toggleError}>
           Toggle Error
        </button>
      </DivWithErrorHandling>
    );
  }
}