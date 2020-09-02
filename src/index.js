import React from 'react';
import ReactDOM from 'react-dom';


const rootNode = document.getElementById("root");
ReactDOM.render(<App/>,rootNode);

const NewPage = () => <div>New Page</div>

//setTimeout(() => ReactDOM.render(<NewPage/>, rootNode),2000)
