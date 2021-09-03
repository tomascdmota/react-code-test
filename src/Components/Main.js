import React, {useEffect, useState} from 'react'
import axios from "axios"
import Card from './Card'

function Main() {
    const url = "https://6033c4d8843b15001793194e.mockapi.io/api/locations";
    const [locations, setLocations] = useState(null);
  
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setLocations(response.data)
        })
  
    }, [url]);
  
    return (
      <div className="card-component">
        {locations ? locations.map((location) => (
          <div >
              <Card id={location.id}
                    name={location.name}
                    userCount={location.userCount}
                    createdAt={location.createdAt}/>
            
          </div> 
        )) : (
          <h1>error</h1>
        )}
      </div>
    )
}

export default Main
