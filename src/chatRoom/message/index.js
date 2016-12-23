/**
 * Created by liumc on 2016/12/18.
 */
import React from 'react'
import {hashHistory} from 'react-router';
export default React.createClass({

    render() {
        var {mes} = this.props;
        console.log(mes,"view",mes.map,typeof mes);
        var nodes = mes.map(function (obj,i) {
            return <li key ={i}>{obj.text}</li>
        });
        return (
            <div>
                <ul>
                    {nodes}
                </ul>
                <input ref="_input" />
                <button onClick={this._submit}>Send</button>
            </div>
        )
    },
    _submit(){
        var {submitMessage} = this.props;
        var value = this.refs._input.value;
        submitMessage(value);
        this.refs._input.value = '';
    },
    componentWillMount(){
        console.log("componentWillMount");
        var {socket,receiveMessage,loadMessage,comfirm} = this.props;

        console.log(comfirm);
        if(comfirm){
            loadMessage();
            socket.on('chat message',function (obj) {
                console.log(obj);
                receiveMessage(obj);
            })
        }else{
            hashHistory.push('login');
        }
    },
    componentDidMount(){
        console.log("componentDidMount");

    }
})








