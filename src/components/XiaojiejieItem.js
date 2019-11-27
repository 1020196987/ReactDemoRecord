import React from 'react';
import PropTypes from 'prop-types'
import {Fragment} from 'react'
class XiaojiejieItem extends React.Component {
    constructor(props) {
        super(props)
        // console.error(props)
        this.handleClick = this.handleClick.bind(this)

    }
    render() { 
        console.log('子组件---render')
        return (
            <Fragment>
                <div>{this.props.avname}</div>
                <li onClick={this.handleClick}>{this.props.content}</li>
            </Fragment>
            
        );
    }
    handleClick() {
        // console.log(this.props.index)
        this.props.delItem(this.props.index)
    }
    UNSAFE_componentWillReceiveProps() {
        console.log('子组件------------componentWillReceiveProps')
    }
    UNSAFE_componentWillMount() {
        console.log('子组件------------UNSAFE_componentWillMount')
    }


    //组件删除触发的生命周期函数
    
    componentWillUnmount() {
        console.error('child----componentWillUnmount')
    }
    shouldComponentUpdate() {
        // return false
        console.log('child ----------shouldComponentUpdate')
        return true
    }
    UNSAFE_componentWillUpdate() {
        console.log('子组件------UNSAFE_componentWillUpdate')
    }
}
XiaojiejieItem.propTypes = {
    content: PropTypes.string.isRequired,
    index: PropTypes.number,
    delItem: PropTypes.func
}
XiaojiejieItem.defaultProps = {
    avname: '哈哈哈'
}
export default XiaojiejieItem