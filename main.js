import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './src/reducers/reducer_combiner';
import { Router, browserHistory, hashHistory } from 'react-router';
import routes from './routes';
import promise from 'redux-promise';
require('file-loader?name=[name].[ext]!./index.html');

//middleware is added to be able to implement dispatch().then to returning promises from ajaxcalls
const enhancer = applyMiddleware(promise);

function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
};

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        {/*<Router history={hashHistory} routes={routes} />*/}
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.getElementById('body'));

// ReactDOM.render(<App />, document.getElementById("app"));