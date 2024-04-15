import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '../../store';

export {Page}
function Page()
{
 return(
      <Provider store={store}>
          <App />
      </Provider>  
  );
}
