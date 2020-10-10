/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';*/

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card'; no longer being used
//import CardList from './CardList'
import App from './App'
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import './App.css'
//import { robots } from './robots';
// have to desstructure {robots} because other ones like card are default

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/*ReactDOM.render(
  <React.StrictMode>
    <CardList robots={robots}/>
  </React.StrictMode>,
  document.getElementById('root')
);*/
//{robots} is a prop
/*ReactDOM.render(
  <React.StrictMode>
    <div>
    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);*/

//<Hello greetings={`Hi & I hope you enjoy React`}/> links to {this.props.greetings} in hello.js
// can add props or properties to <Hello /> & in hello.js can add this.props.greeting
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
