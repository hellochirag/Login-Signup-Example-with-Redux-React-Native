import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './Reducers/Store';
import Screen from './Screen';

class App extends  Component{
    render(){
        return(
            <Provider store={store}>
                <Screen/>
            </Provider>
        )
    }
}
export default App