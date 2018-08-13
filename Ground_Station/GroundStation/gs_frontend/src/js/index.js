import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import LoginForm from './App';
import MainPage from './MainPage';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <div>  
      <Route path="/mainPage" component={MainPage} />
      <Route path="/loginPage" component={LoginForm}/>
    </div>
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
