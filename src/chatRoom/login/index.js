/**
 * Created by liumc on 2016/12/22.
 */
import React from 'react';
import {  Router, Route, hashHistory,IndexRoute } from 'react-router';
// import Login from '../component/login/connection'
// import Loading from '../component/loading/index'
// import Home from '../component/home/connection'

export default React.createClass({

    render(){
        return(
            <div>
                <h1>登录</h1>
                <input type="text" ref="username"/>
                <input type="text" ref="password"/>
                <button onClick={this.login}>登录</button>
                <button onClick={this.toRegister}>注册</button>
            </div>
        )
    },
    toRegister(){
        hashHistory.push('register');
    },
    login(){
        var {login} = this.props;

        var obj = {
            username:this.refs.username.value,
            password:this.refs.password.value
        };

        login(obj);


    }

})