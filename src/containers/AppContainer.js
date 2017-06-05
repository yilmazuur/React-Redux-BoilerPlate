import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        checkToken: () => {
            let token = localStorage.getItem('jwtToken');
            if (!token || token === '') {//if there is no token, dont bother
                return false;
            }
            return true;
        },
        resetMe: () => { //for logout
            localStorage.removeItem('jwtToken'); //remove token from storage
            dispatch(resetToken());
        }
    }
}

let AppContainer = connect(null, mapDispatchToProps)(App);
export default AppContainer;
