import React ,{Component} from "react";
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component{ 

 

render() {

  return this.props.todos.map((td)=>(
  <TodoItem  key={td.id} td={td} markComplete={this.props.markComplete} deltodo={this.props.deltodo}/>
  ));
}

}
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
  