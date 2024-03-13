
 import React 			from 'react';
import ReactDOM      from 'react-dom';
import App 				from './App.js';
import { Provider } 	from 'react-redux';
import thunk        	from 'redux-thunk';
import reducer 		from './admin2.0/store/reducer';

import * as serviceWorker  					from './serviceWorker';
import { createStore, applyMiddleware } 	from 'redux';
import './index.css';

const configureStore = () => {   
	return createStore( reducer, applyMiddleware(thunk)) ;
}
const store = configureStore();
ReactDOM.render( <Provider store={store}> <App /> </Provider>,  document.getElementById('root'));
serviceWorker.unregister();
