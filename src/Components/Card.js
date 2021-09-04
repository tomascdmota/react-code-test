import React, {useEffect, useState} from 'react'
import '../css/card.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from '../actions/index';



function Card({ id, userCount, createdAt }) {


 // Here I am using localStorage to store the state of the viewCount (times the component was clicked) to the browser storage so the state is maintains its value even after a refresh   
    const [view, setViewCount] = useState(parseInt(localStorage.getItem(id)) || 0);


    useEffect(() => {
        localStorage.setItem(id, view.toString())
    }, [view])

 

    return(
        <div>
       
        <div className="card" onClick={() => setViewCount(v => v + 1)}>
            <div className="card-container">
                    <div id={id}>
                        <header>
                            <h1 className="title">Acme HQ</h1>
                        </header>
                        <div className="users">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Users_skb8o5.svg" alt="user-image"/><p>{userCount} users</p>
                        </div>

                        <div className="date">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Timezone_lwh7iz.svg" alt="date-image"/><p className="date">{createdAt}</p>
                        </div>


                        <div className="views">
                            <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1630662433/Views_tdmyso.svg" alt=""/> <p>{view} views</p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
  }

  export default Card;