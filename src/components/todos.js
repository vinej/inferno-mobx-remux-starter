import Inferno from 'inferno'
import React from 'react';
import { observable } from 'mobx'
import { observer } from "mobx-react";
import TodoStore, { todoShape } from '../stores/todo_store'

@observer
class Todo extends React.Component {
  static propTypes = {
     todo:  React.PropTypes.shape(todoShape), 
     store: React.PropTypes.instanceOf(TodoStore)
  }

  getTodoDoneClass(todo) {
    if (todo.done) {
      return { textDecoration: "line-through", color: 'lightgray' }
    } else {
      return { textDecoration: "none", color : 'black'}
    }
  }
  render() {
    const on = this.props.store.on
    const todo = this.props.todo
    return (  <tr> 
                <td>{todo.id}</td> 
                <td onClick={ () => on.todoSetDone(todo, !todo.done) } 
                    style={ this.getTodoDoneClass(todo) }>{todo.desc}</td> 
                <td onClick={ () => on.todoDelete(todo.id)}>del</td>
              </tr> );
  }
}

@observer
export default class Todos extends React.Component {
  @observable _desc = ''

  constructor(props) {
    super(props)
    this.desc= ''
  }

  componentWillMount() {
    const on = this.props.store.on
    on.todoGetAll()
  }

  static propTypes = {
    store: React.PropTypes.instanceOf(TodoStore),
  }

  render() {
      const store = this.props.store
      const on = store.on
      return ( 
        <div className="pure-form">
          <table className='pure-table'>
            <thead >
              <tr>
                <th>Id</th>
                <th style={{ width: '130px'}}>Description</th>
                <th >del</th>
              </tr>
            </thead>
            <tbody>
            { store.todos.map( (todo) => <Todo key={todo.id} todo={todo} store={store} /> ) }
            </tbody>
          </table>
          <div>
            <input    type='text'  
                      value = { this._desc }
                      onChange = { (event) => this._desc = event.target.value }
                      onBlur= { (event) => on.todoSetDesc(event.target.value) }/>
          </div>
          <button className="pure-button" onClick={ () => { on.todoAdd(); this._desc= ''} }> add </button>
        </div>
      )
   }
}
