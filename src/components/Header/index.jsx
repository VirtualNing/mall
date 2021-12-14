import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';
import './index.css'

export default class Header extends Component {
  static propTypes = {
    sendOut: PropTypes.func.isRequired
  }
  handleKeyUp = (e) => {
    //解构赋值
    const {keyCode,target} = e;
    // eslint-disable-next-line eqeqeq
    if(keyCode == 13){
      if(target.value === ''){
        alert("输入不能为空");
        return;
      }
      const todoObj = {id: nanoid(),name: target.value,done:false};
      this.props.sendOut(todoObj);
    }

  }
  render() {
    return (
      <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
          </div>
    )
  }
}
