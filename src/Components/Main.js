import React, {useEffect, useState} from 'react'
import axios from "axios"
import Card from './Card'

function Main() {
    const url = "https://6033c4d8843b15001793194e.mockapi.io/api/locations";

    const [locations, setLocations] = useState(null);
    const count= useState(0);

    const formatTime = (dateStr) => {
      const time = dateStr.split("T")[1].split(".")[0];
      const finalTime = time.slice(-4)
      const finalTime2 = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if(time.length > 1){
       
       finalTime2[5] = +finalTime2[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
       finalTime2[0] = +finalTime2[0] % 12 || 12; // Adjust hours
      }

      const date = dateStr.split("T")[0];
      return finalTime2.join('');
    }


    

   
  
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setLocations(response.data)
        })
  
    }, [url]);

    
  
  
    return (
      <div className="card-component" >
        {locations ? locations.map((location) => (
          <div>
              <Card  id={location.id}
                    count={count}
                    userCount={location.userCount}
                    createdAt={formatTime(location.createdAt)}/>
            
          </div> 
        )) : (
          <h1>Loading...</h1>
        )}
      </div>
    )
}

export default Main;
