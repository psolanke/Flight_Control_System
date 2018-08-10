import React from 'react';
import '../css/App.css';
const withErrorHandling = WrappedComponent => ({ showError, children }) => {
  return (
    <WrappedComponent>
      {showError && <div className="App-error">Couldn't Connect!</div>}
      {children}
    </WrappedComponent>
  );
};

const DivWithErrorHandling = withErrorHandling(({children}) => <div>{children}</div>)

export default DivWithErrorHandling;