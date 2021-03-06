import React from 'react';
import { Component } from 'react';
import AppContainer from '../containers/AppContainer';

class App extends Component {
    render() {
        return (
            <AppContainer>
                {this.props.children}
            </AppContainer>
        );
    }
}

export default App;