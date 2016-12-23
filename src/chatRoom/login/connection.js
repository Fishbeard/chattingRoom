/**
 * Created by liumc on 2016/12/22.
 */

import Login from './index'
import {connect} from 'react-redux'
import {login} from '../action'


var mapState2props = function (store) {
    return {
        mes:store.chatRoom.mes,
        socket:store.chatRoom.socket
    }
};

var dispatch2props = function (dispatch) {
    return {
        dispatch:dispatch,
        login:(obj)=>dispatch(login(obj)),
    }
};


//connect连接器
//链接store,返回值是给所连接的组件当属性用的
export default connect(mapState2props,dispatch2props)(Login)

