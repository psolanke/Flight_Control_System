import React from 'react';
import axios from'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import '../css/App.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'value': '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    var csrfToken = Cookies.get('csrftoken');
    let headers = {
      'headers' : {
        'X-CSRFToken' : csrfToken,
      }
    };

    let payload = {
      'url': this.state.value,
    };
    console.log(axios.post('http://127.0.0.1:8000/loginPage/',payload,headers));
    event.preventDefault();

  }

  render() {
    return (
      <div className='container'>
        <div className='card card-container'>
            <form 
            className='form-signin'
            onSubmit={this.handleSubmit}
            >
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
            </form>
        </div>
    </div>
    );
  }
}

export default LoginForm;
