import './App.css';
import React from 'react';
import useFetch from './useFetch';
import Main from './Components/Main';
import Nav from './Components/Nav'


/*
 In terms of the location text, I chose to use a navbar so I could separate them and create a specific component for the cards, for the data and for the API. I could have also just used simple text tags and then a <hr> for the bottom border per say.

*/




export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: null,
      userCount: null,
      time: 0,
      locations: null

    }
  }

  componentDidMount() {
    fetch('https://6033c4d8843b15001793194e.mockapi.io/api/locations').then((resp) => {
      resp.json().then((result) => {
        console.warn(result.data)
      })
    })
  }

render(){
  return (
    <div>
    <div className="App">
      <Nav/>
    </div>
    <div className="card-component">
      <Main/>
    </div>
   
    </div>
  );
}
}

