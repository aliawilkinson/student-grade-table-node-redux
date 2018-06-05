import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { browserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
