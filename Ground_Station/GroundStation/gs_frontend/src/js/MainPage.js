import React from 'react';
import axios from'axios';
import Cookies from 'js-cookie';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'value': '',
      'showError': null,
      'errorMessage': '',
    }

    this.handleArmOnClick = this.handleArmOnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTakeoffOnClick = this.handleTakeoffOnClick.bind(this);
    this.handleLandOnClick = this.handleLandOnClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleTakeoffOnClick(event){
    console.log('TakeOff')
    let csrfToken = Cookies.get('csrftoken');
    let headers = {
      'headers' : {
        'X-CSRFToken' : csrfToken,
      }
    };
    console.log('TakeOff Height: ' + this.state.value);
    let payload = {
      'takeoff_alt': this.state.value,
    };

    axios.post('http://127.0.0.1:8000/backend/takeoff', payload, headers)
      .then(
        response => {
          this.setState({
            'showError': !response.data['success'],
          });
        }
      );

  }

  handleArmOnClick(event){
    console.log('Arming Drone');
    let csrfToken = Cookies.get('csrftoken');
    let headers = {
      'headers' : {
        'X-CSRFToken' : csrfToken,
      }
    };

    axios.post('http://127.0.0.1:8000/backend/arm',headers)
      .then(
        response => {
          this.setState({
           'showError': !response.data['success'],
          });
        }
    );
  }

  handleLandOnClick(event){
    console.log('Landing Drone');
    let csrfToken = Cookies.get('csrftoken');
    let headers = {
      'headers' : {
        'X-CSRFToken' : csrfToken,
      }
    };

    axios.post('http://127.0.0.1:8000/backend/land',headers)
      .then(
        response => {
          this.setState({
           'showError': !response.data['success'],
          });
        }
    );
  }

  render() {
    return (
      <div>
        <button 
          className='btn btn-lg btn-primary btn-block btn-signin' 
          type='button'
          onClick={this.handleArmOnClick}
        >
          Arm
        </button>
        <br/>
        <div>
          <button 
            className='btn btn-lg btn-primary btn-block btn-signin' 
            type='button'
            onClick={this.handleTakeoffOnClick}
          >
            Take-off
          </button>
          <input 
            type='number' id='inputAlt' 
            className='form-control' 
            placeholder='Enter Height' 
            onChange={this.handleChange}  
            required autoFocus
          />
        </div>
        <button 
          className='btn btn-lg btn-primary btn-block btn-signin' 
          type='button'
          onClick={this.handleLandOnClick}
        >
          Land
        </button>
      </div>
    );
  }
}

export default MainPage;