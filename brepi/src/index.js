import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//To render a React element into a root DOM node, pass both to ReactDOM.render()

//state: any data from a component that it currently uses
//stateless functional component