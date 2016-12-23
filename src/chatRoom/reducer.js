import {combineReducers} from 'redux'
import io from 'socket.io-client'



var chatRoom = function (state, action) {
    var socket = io.connect('http://localhost:3000/');
    var obj = {
        socket:socket,
        mes:[],
        onceGet:true,
        comfirm:false
    };

    switch (action.type){
        case 'submit':
            console.log("执行了submit");
            socket.emit('chat message',action.text);
            return state;
        case 'receive':
            console.log("执行了receive");
            var mes = state.mes;

            if(typeof action.obj == 'object'){
                // mes.push(action.text);
                return Object.assign({},state,{mes:action.obj})
            }
            return Object.assign({},state,{mes:[...mes]});

        case 'load':
            return Object.assign({},state,{mes:action.obj});

        case 'login':
            console.log(action.obj.comfirm);
            return Object.assign({},state,{comfirm:action.obj.comfirm});
    }
    return obj;
};



//合并reducer

export default combineReducers({
    chatRoom
})
