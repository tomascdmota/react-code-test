# This is my Application for Tymeshift

This project was made using React.js only. 

## Components

 I decided to separate all of the things I had to do into components, so it would ease my job and make it easier, in case I had to do the same thing twice, I could just render the component on both ends.
    

### `Nav.js`

 Starting with the nav. I was kind of undecided on what to do here, but I ended up doing a nav so I could isolate the component and styling it without the chance of it affecting/getting affected by other components css. 
  This one was quite simple, just two text tags and the styling provided to me in the github repo.


### `Main.js`

 So I chose Main.js to store all of the cards and for fetching the API data. I used a few functions from the utils folder, but I'll go there next. 
  It was on this file that I ended up using AXIOS for fetching the API data. Axios managed the HTTP Request, that retrieve an response, which was an array (JSON object).
 Last but not least I mapped through the array so I could match each card component with their unique data (used ID).

### `Card.js`

This is the component that holds every bit of information provided by the API.
 It has a hook, to save the current view count to the LocalStorage (so it isn't lost on a browser refresh) and serves two functions -> 
  - Open the modal and increase the viewCount by One
  - Close the modal

In the core of this component we return the JSX part of it (HTML) that takes the API data passed from the Main.js component. By the end of it, we are rendering a ternary function which renders the modal if the state of showModal is equal to true.

### `Modal.js`
 
 For starters we are passing as parameters of this component the same data that the card component holds. Then we map the array just to retrieve the id of each object in order to link each modal to their respective card.


## Css

 In terms of the Css it was quite simple. I used flexbox for the navbar, the cards and the modal, and ended up using GridLayout to render all the cards in this position, so it auto adjusts. 

  Every guideline was followed, in terms of colors, fonts, text sizes, margins, paddings, opacities, etc...


## Utils

 I created two utils, one for the Url, which made it simpler in case if we needed to change the API's url down the line we would just need to change it once (this would be done with environment variables in a production build).
  The second one was the Date.helper.js, which I made to format the data inside of the cards, so I don't fill the card component with much junk, this way I can reuse it and if I need to display the date instead of the time I just need to change it in one place. Just makes sense.


## Resources 

Eventough I'd love to say so, I don't know everything and am aware of how far from knowing it all is. Therefore I thought it would be nice to show the resources I used to make this project, as it shows my googling skills and ability to prepare what I am going to do in terms of logics and then research the execution needed for the process. For this I the obvious Stack Overflow, github pages and other articles that I found online. However, I am also part of several dev discord groups and I did go there too. I am not afraid to admit when I am stuck and I will ask for help rather than sitting there trying the same 4 solutions over and over. 


## Overview

 After spending this many hours around a project like this I feel like I learned a few things. It was nice to do, I did stumble on a few setbacks but managed to overcome them all.
  Thank you and I will be waiting for your feedback.
  Tomas.