import React from 'react';
import * as ReactDOMClient from 'react-dom/client'
import App from './App';
import './index.css'
import store from './RTK/store';
import {Provider} from 'react-redux'
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
    <Provider store={store}>
    <App />
    </Provider>


)

