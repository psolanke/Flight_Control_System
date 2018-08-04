import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import LoginForm from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginForm />, document.getElementById('root'));
registerServiceWorker();
