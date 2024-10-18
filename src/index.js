import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './store/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < >
    <Provider store={store}>

      <ToastContainer />
      <App />

    </Provider>
  </>

);

