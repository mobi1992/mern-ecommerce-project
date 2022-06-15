import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));

// const options = {
//   timeout : 5000,
//   position : positions.BOTTOM_CENTER,
//   transition : transitions.SCALE
// }
root.render(
  <Provider store={store}>
    {/* <ALertProvider template = {ALertTemplate} {...options }> */}
      <App />
    {/* </ALertProvider> */}
  </Provider>
);

