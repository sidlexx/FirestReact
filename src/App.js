import React ,{Component} from "react";
import Todos from './Todos'
import Header from './layout/Header'
import AddTo from './AddTo'
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import axios from 'axios';

class App extends Component{
state = {
  todos:[     ]

  }
 componentDidMount(){
   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>this.setState({todos:res.data}))
 }
  //toggle compl
 
  markComplete=(id)=>
  {   
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id===id)
      {
        todo.completed=!todo.completed;//this is cause we need to toggle it 
      }
      return todo;
    }
      
      )});
  }


  deltodo=(id)=>{
    this.setState({todos: [...this.state.todos.filter(todo=>todo.id!==id )]
    
    })
  }

  AddTo=(title)=>{
    const newtd={
      id:Math.random(),
      title,
      completed:false
    } 
    this.setState({todos:[...this.state.todos, newtd]})
    console.log(newtd.id)
  }

render() {
  
  return (
    <Router>
    <div className="App">
      <div className="container">
    <Header />
    
    <Route exact path="/" render={props=>(
      <React.Fragment>
      <Todos todos={this.state.todos} markComplete={this.markComplete}
      deltodo={this.deltodo} />
      <AddTo addTo={this.AddTo } />

      </React.Fragment>
    )}/>
    <Route path="/About" component={About}/>
    </div>
    </div>
    </Router>
  );
}
}
export default App;
  