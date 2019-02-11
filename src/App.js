import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import axios from 'axios'

const makeRequest = () => {
  axios.get('http://localhost:5000/api/values')
    .then(res => alert(JSON.stringify(res.data)))
    .catch(error => alert(error))
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      stuff: ""
    }
  }

  render() {
    return (
      <div className="App">      
        <Main onRequest={makeRequest} />
      </div>
    );
  }
}

export default App;
