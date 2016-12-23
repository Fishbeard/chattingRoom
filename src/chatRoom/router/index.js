/**
 * Created by liumc on 2016/12/22.
 */
import React from 'react';
import {  Router, Route, hashHistory,IndexRoute } from 'react-router';
import Login from '../login/connection'
// import Loading from '../component/loading/index'
import Register from '../register/connection'
import Mes from '../message/connection'

export default React.createClass({

    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={Login}/>
                <Route path="login" component={Login}></Route>
                <Route path="register" component={Register}></Route>
                <Route path="messages" component={Mes}></Route>
            </Router>
        )
    }

})