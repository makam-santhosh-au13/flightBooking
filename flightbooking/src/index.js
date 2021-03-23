import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import {FlightProvider} from './context'
ReactDOM.render(
  <React.StrictMode>
  <FlightProvider>
     <App />
  </FlightProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
