import './App.css';
import useFetch from './useFetch';
import Main from './Components/Main';


/* 
 In terms of the location text, I chose to use a navbar so I could separate them and create a specific component for the cards, for the data and for the API. I could have also just used simple text tags and then a <hr> for the bottom border per say.

*/



function App() {



  return (
    <div>
    <div className="App">
      <header className="App-header">
        <div className="header">
        <p>All locations</p>
        <h1>Acme locations</h1>
        </div>
      
      </header>
      
    </div>
    <Main/>
    </div>
  );
}

export default App;
