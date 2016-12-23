/**
 * Created by liumc on 2016/12/11.
 */
import request from 'superagent'
import { hashHistory } from 'react-router';

export function receiveMessage(obj) {
    return {
        type:'receive',
        obj:obj
    }
}
export function submitMessage(text) {
    return {
        type:'submit',
        text:text
    }
}

export function loadMessage() {
    return function (dispatch) {
        console.log('欢迎来到聊天室');
        request
            .get("http://localhost:3000/messages")
            .end(function (err, res) {
                console.log(res,'request');
               dispatch({
                   type:'load',
                   obj:res.body
               })
            });
    }
}

export function login(obj) {//obj:obj
    return function (dispatch) {
        console.log(obj);
        request
            .get("http://localhost:3000/logins")
            .query(obj)
            .end(function (err, res) {
                dispatch({
                    type:'login',
                    obj:res.body
                });
                if(res.body.comfirm == true){
                    hashHistory.push('messages');
                }
            });
    }
}


export function register(obj) {//obj:obj
    return function (dispatch) {
        console.log(obj);
        request
            .get("http://localhost:3000/register")
            .query(obj)
            .end(function (err, res) {
                console.log(res.text=="success")
                if(res.text=="success"){
                    hashHistory.push('login');
                }
            });
    }
}