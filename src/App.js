import React, { Component } from 'react';
import { Header } from './components';
import { hot } from "react-hot-loader";

import ListContainer from './components/ListContainer/ListContainers';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ListContainer/>
            </div>
        );
    }
}

export default hot(module)(App);

