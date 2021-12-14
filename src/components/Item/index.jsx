import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'

export default class Item extends Component {
  //对传输函数进行限制
  static propTypes = {
    toChild: PropTypes.func.isRequired
  }
  // 鼠标移入移除事件记录
  state = {mouse: false};
  handleMouse = (flag) =>{
    return () =>{
      this.setState({mouse: flag})
    }
  }
  //选择事件
  handleCheck = (id) =>{
    return (e) =>{
      this.props.toChild(id,e.target.checked);
      //console.log(id,e.target.checked);
    }
  }
  handleDelete = (id) => {
      if(window.confirm("确定删除？")){
        this.props.todoDelete(id)
      }
  }
  render() {
    const {id,name,done} = this.props;
    const {mouse} = this.state;
    return (
      <li style={{backgroundColor:mouse ? '#add' : '#fff'}} key={id} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input checked={done} type="checkbox" onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: !mouse ? 'none' : 'block' }}>删除</button>
      </li>
    )
  }
}
