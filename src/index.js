import React from 'react';
import ReactDOM from 'react-dom';
// importing the touch tap plugin
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
// importing the component
import App from './App';
import './index.css';
import './highlight.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
