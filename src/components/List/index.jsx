import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'
import Item from '../Item';

export default class List extends Component {
  static propTypes = {
    toChild: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
  }
  render() {
    const {todos,toChild} = this.props;
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item toChild={toChild} key={todo.id} {...todo}></Item>;
          })
        }
      </ul>
    )
  }
}
