/**
 * Created by liumc on 2016/12/10.
 */
import React from 'react'
import ReactDOM from 'react-dom'



export default React.createClass({
    render(){
        const {items,name,dispatch,active} = this.props;
        console.log(this.props);


        var nodes = items.map(function (obj,i) {
            return (
                <li key={i}>{obj.name}</li>
            )
        });
        return(
            <div>
                <input ref="input"/>
                <button onClick={this.handleAdd}>add</button>
                <ul>
                    {nodes}
                </ul>
            </div>
        )
    },
    handleAdd(){
        const {add} = this.props;
        var value = ReactDOM.findDOMNode(this.refs.input).value
        add(value);
    },
    componentDidMount(){
        const {get111} = this.props
        get111({aaa:111,bbb:222})
    }

})