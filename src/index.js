import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/Index';
import thunk from 'redux-thunk';

// import authReducer from '/.Reducers/authReducer';
// import 'toastr/build/toastr.css';
import { composeWithDevTools} from 'redux-devtools-extension';
import setCurrentUserToStore from './Utils/setCurrentUserToStore';

// const store =createStore(reducer, composeWithDevTools());
const store =createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// setAuthorizationToken()
setCurrentUserToStore(store)

ReactDOM.render(
    <BrowserRouter>
    
    <Provider store={store}>

<App />

</Provider>
    </BrowserRouter>,
 document.getElementById('root'));


serviceWorker.unregister();

