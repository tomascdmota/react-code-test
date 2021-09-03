import React, {useEffect, useState} from 'react'
import axios from 'axios';
import '../css/card.css';

function Card({ id, userCount, createdAt }) {

    const [view, setViewCount] = useState(0);

 

    return(
        <div className="card" onClick={() => setViewCount(v => v + 1)}>
            <div className="card-container">
                    <div id={id}>
                        <header>
                            <h1 className="title">Acme HQ</h1>
                        </header>
                        <div className="users">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Users_skb8o5.svg"/><p>{userCount} users</p>
                        </div>

                        <div className="date">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Timezone_lwh7iz.svg"/><p className="date">{createdAt}</p>
                        </div>


                        <div className="views">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Views_tdmyso.svg"/> <p>{view} views</p>
                        </div>
                    </div>
            </div>
        </div>
    )
  }

  export default Card;