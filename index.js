/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './src/stores/stores';

const store = createStore(rootReducer, applyMiddleware(thunk));

const ReduxApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
