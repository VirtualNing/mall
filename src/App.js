import React ,{ Component } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {todos:[
      {id:'001',name:'睡觉',done:true},
      {id:'002',name:'吃饭',done:false},
      {id:'003',name:'刷牙',done:true},
      {id:'004',name:'泡面',done:false}
    ]};
  }
  handleSend = (todoObj) =>{
    const {todos} = this.state;
    //追加一个事件
    const newTodos = [todoObj,...todos];
    this.setState({
      todos: newTodos
    })
  }
  handleUpdate = (id,done) =>{
    //获取todos
    const {todos} = this.state;
    //遍历比对
    const todoUpdates = todos.map((todo)=> {
      if (todo.id === id){
        return {...todo,done}
      }else {
        return todo;
      }
    })
    this.setState({
      todos: todoUpdates
    })
  }
  handleDelete = (id) =>{
    const {todos} = this.state;
    const newTodos = todos.filter((obj) =>{
      return obj.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }
  handleCheckAll = (done) =>{
    const {todos} = this.state;
    const newTodos = todos.map((todo)=>{return {...todo,done}});
    this.setState({todos:newTodos})
  }
  handleClear = (done) =>{
    const {todos} = this.state;
    const newTodos = todos.filter((obj) =>{
      return obj.done !== done
    })
    this.setState({todos: newTodos})
  }
  render(){
    const {todos} = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header sendOut={this.handleSend} />
          <List todoDelete = {this.handleDelete} toChild={this.handleUpdate} todos={todos} />
          <Footer todoClear={this.handleClear} todoChenkAll={this.handleCheckAll} todos={todos} />
        </div>
      </div>
    )
  }
}
