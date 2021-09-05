import './App.css';
import React from 'react';
import useFetch from './useFetch';
import Main from './Components/Main';
import Nav from './Components/Nav'


/*
 In terms of the location text, I chose to use a navbar so I could separate them and create a specific component for the cards, for the data and for the API. I could have also just used simple text tags and then a <hr> for the bottom border per say.

*/



function App() {
  
  return (
    <div>
      <div className="App">
        <Nav/>
      </div>
      
      <div className="card-component-main">
        <Main/>
      </div>
   
    </div>
  );

}

export default App;