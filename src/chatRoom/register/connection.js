/**
 * Created by liumc on 2016/12/10.
 */

import Register from './index'
import {connect} from 'react-redux'
import {register} from '../action'


var mapState2props = function (store) {
    return {
        mes:store.chatRoom.mes,
        socket:store.chatRoom.socket
    }
};

var dispatch2props = function (dispatch) {
    return {
        dispatch:dispatch,
        register:(obj)=>dispatch(register(obj))
    }
};


//connect连接器
//链接store,返回值是给所连接的组件当属性用的
export default connect(mapState2props,dispatch2props)(Register)

