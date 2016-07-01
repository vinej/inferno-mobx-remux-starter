import Inferno from 'inferno';
import Component from 'inferno-component';
import { observer } from '../mobx_inferno.js'

@observer
class Todo extends Component {

  getTodoDoneClass(todo) {
    if (todo.done) {
      return { textDecoration: "line-through", color: 'lightgray' }
    } else {
      return { textDecoration: "none", color : 'black'}
    }
  }

  render() {
    return (  <tr> 
                <td>{this.props.todo.id}</td> 
                <td onClick={ () => this.props.todo.done = !this.props.todo.done} 
                    style={ this.getTodoDoneClass(this.props.todo) }>{this.props.todo.desc}</td> 
                <td onClick={ () => this.props.store.delete(this.props.todo.id)}>del</td>
              </tr> );
  }
}

@observer
export default class Todos extends Component {
  constructor(props) {
    super(props)
  }

  render() {
      const store = this.props.store
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
            <input  type='text' 
                    value={ store.desc } 
                    onChange={ (event) => store.desc = event.target.value } 
                    />
          </div>
          <button className="pure-button" onClick={ () => store.add() }> add </button>
        </div>
      )
   }
}
