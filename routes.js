import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './src/pages/App.jsx';
import SignIn from './src/pages/SignIn.jsx';
import MainPage from './src/pages/MainPage.jsx';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={SignIn} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/mainPage" component={MainPage} />
    </Route>
);