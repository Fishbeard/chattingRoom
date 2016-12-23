/**
 * Created by liumc on 2016/12/10.
 */
import {Provider} from 'react-redux'
import {createStore,compose,applyMiddleware} from 'redux'
import reducer from './reducer'
// import C from './message/connection'
import Router from './router/connection'
import React from 'react'
import thunk from 'redux-thunk'

var store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension()
    )
);


export default React.createClass({
    render(){
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        )
    }
})