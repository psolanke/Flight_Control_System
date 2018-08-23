import React from 'react';
import axios from'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import '../css/App.css';
import DivWithErrorHandling from './ErrorComponent';
import { Redirect } from 'react-router'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'value': '',
      'showError': null,
      'toMainPage': null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    let csrfToken = Cookies.get('csrftoken');
    console.log(csrfToken);
    let headers = {
      'headers' : {
        'X-CSRFToken' : csrfToken,
      }
    };

    let payload = {
      'url': this.state.value,
    };
    axios.post('http://127.0.0.1:8000/loginPage/',payload,headers)
      .then(
        response => {
          this.setState({
           'showError': !response.data['success'],
           'toMainPage': response.data['success'],
          });
        }
    );
    event.preventDefault();

  }

  render() {
    console.log(this.state.showError);
    if (this.state.toMainPage === true) {
      return <Redirect to='/mainPage' />
    }
    return (
      <div className='container'>
        <div className='card card-container'>
            <form 
            className='form-signin'
            onSubmit={this.handleSubmit}
            >
              <DivWithErrorHandling showError={this.state.showError}>
              <p
              id='profile-name' 
              className='profile-name-card'
              >
              JATAYU
              </p>
              <input 
              type='url' id='inputURL' 
              className='form-control' 
              placeholder='Enter URL' 
              onChange={this.handleChange}  
              required autoFocus
              />
              <br/>
              <button 
              className='btn btn-lg btn-primary btn-block btn-signin' 
              type='submit'
              >
                Submit
              </button>
              <button
              className='btn btn-lg btn-primary btn-block btn-signin'
              type='button'
              >
                Search Devices
              </button>
            </DivWithErrorHandling>
            </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
