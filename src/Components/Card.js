import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Card() {
    const url = "https://6033c4d8843b15001793194e.mockapi.io/api/locations";
    const [locations, setLocations] = useState(null);

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setLocations(response.data)
        })

    }, [url])

    if(locations) {
        return (
            <div>
                <h1>Acme HQ</h1>
                <p>{locations?.[0].name}</p>
            </div>
        )
    }

    return (
        <div>
            <h1>error</h1>
        </div>
    )

   
}

export default Card
