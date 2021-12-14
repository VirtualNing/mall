import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
  handleCheck = (e) =>{
      this.props.todoChenkAll(e.target.checked);
  }
  handleClear = () =>{
    this.props.todoClear(true)
  }
  render() {
    const {todos} = this.props;
    const total = todos.length;
    const todoCount = todos.reduce((pre,current) =>pre + (current.done),0);
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheck} checked={todoCount===total && todoCount !== 0 ? true : false} />
        </label>
        <span>
          <span>已完成{todoCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClear} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
