import React from 'react';
import './App.css';
import logo from './logo.svg';
import axios from 'axios';
const API_ENDPOINT = 'https://swapi.co/api/people/1/';

// fetch(API_ENDPOINT)
//     .then(r => r.json()
//     .then(data => {
//         console.log(data);
//     }))

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'not their real name'
  }
}

componentDidMount() {
  // This is the method that React calls after the component has been attached to the DOM as a reeal element. 
  // This is the first React method where it is safe to call
  axios.get(API_ENDPOINT)
    .then(response => {
      console.log(response.data.name);
      // name = response.data.name;
      this.setState({
        name: response.data.name
      })
    })
}

  render() {
    return (
    <div className="App">
      <header className="App-header">
       {
       this.state.name || <img src={logo}/>
       }
      </header>
    </div>
  );
}
}

export default App;
