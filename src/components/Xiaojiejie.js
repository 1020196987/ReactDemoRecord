import React from 'react'
import XiaojiejieItem from './XiaojiejieItem'
import {Fragment} from 'react'
import Axios from 'axios'
// import ReactDom from 'react-dom'

//生命周期函数总结：
// 1. Initialization阶段，比如向初始化构造函数里的props和state
// 2. 
class XiaoJieJie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render() {
        console.log('父组件--------------render')
        return (
            <Fragment>
                <input 
                    value={this.state.inputValue} 
                    onChange={this.changeInput.bind(this)}
                    ref={(input)=>{this.input = input}}
                /> 
                <button style={{backgroundColor: 'red',width: 50}} onClick={this.addList.bind(this)}>增加</button>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <XiaojiejieItem 
                                key={index} 
                                content={item} 
                                index={index}
                                delItem={this.delItem.bind(this)}
                                >
                                </XiaojiejieItem>
                                // <li key={index}
                                //     onClick={this.delItem.bind(this, index)}>
                                //     {item}
                                // </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    changeInput(e) {
        this.setState({
            inputValue: this.input.value
            // inputValue: e.target.value
        })
    }
    addList(e) {
        if (this.state.inputValue !== '') {
            this.setState({
                list: [...this.state.list, this.state.inputValue],
                inputValue: ''
            })
        }
        
    }
    delItem(delIndex) {
        // console.log(delIndex)
    
        this.state.list.splice(delIndex, 1)
        this.setState({
            list: this.state.list
        })
    }

    //生命周期函数测试
    UNSAFE_componentWillMount() {
        console.log('父组件-------componentWillMount')
    }
    componentDidMount() {
        console.log('父组件--------componentDidMount')
        Axios.get('https://easy-mock.com/mock/5dde20982733c3199e2b7fe3/ReactDemo01/xiaojiejie')
             .then((res) => {
                 console.log(JSON.stringify(res))
                 this.setState({
                     list: res.data.data
                 })
             })
             .catch((err) => {
                 console.error('获取数据失败！！')
             })
    }
}
export default XiaoJieJie