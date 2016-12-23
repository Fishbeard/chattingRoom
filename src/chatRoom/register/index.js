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
                <h1>注册</h1>
                <label>用户名</label><input type="text" ref="username"/>
                <label>密码</label><input type="text" ref="password"/>
                <button onClick={this.subRegister}>注册</button>
            </div>
        )
    },
    subRegister(){
        var {register} = this.props;
        var obj = {
            username:this.refs.username.value,
            password:this.refs.password.value
        };
        register(obj)
    }

})