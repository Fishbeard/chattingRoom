/**
 * Created by liumc on 2016/12/10.
 */

import Chat from './index'
import {connect} from 'react-redux'
import {submitMessage,receiveMessage,loadMessage} from '../action'


var mapState2props = function (store) {
    return {
        mes:store.chatRoom.mes,
        socket:store.chatRoom.socket,
        comfirm:store.chatRoom.comfirm
    }
};

var dispatch2props = function (dispatch) {
        return {
            dispatch:dispatch,
            submitMessage:(text)=>dispatch(submitMessage(text)),
            receiveMessage:(text)=>dispatch(receiveMessage(text)),
            loadMessage:()=>dispatch(loadMessage())
        }
};


//connect连接器
//链接store,返回值是给所连接的组件当属性用的
export default connect(mapState2props,dispatch2props)(Chat)

