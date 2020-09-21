import React,{Component} from 'react';
import Header from './component/layout/Header';
import {BrowserRouter as Router,Route} from react-router-dom;
import Todos from './component/Todos';
import AddTodo from './component/AddTodo';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Read your bible',
        completed: false
      },
        {
          id: uuid.v4(),
          title: 'Pray',
          completed: false
        },
          {
            id: uuid.v4(),
            title: 'Bath and Eat',
            completed: false
          },
    ]
  }

  //toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo=>todo.id !== id)] })
  }

  //addtodo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render(){
    return (
      <Router>
         <div className="App">
        <div className="container">
          <Header />
          <Route path= "/" render = {props => {
            <React.Fragment>
               <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos}  markComplete={this.markComplete}
                delTodo={this.delTodo}/>
            </React.Fragment>
          }} />
        </div>
      </div>
     </Router>
    );
  }
}

export default App;
