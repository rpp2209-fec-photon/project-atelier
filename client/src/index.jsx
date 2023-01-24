import React from "react";
import ReactDOM from "react-dom/client";

import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';


//ReactDOM.createRoot(<div><RatingsAndReviews/></div>, document.getElementById('root'));

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(<RatingsAndReviews/>);