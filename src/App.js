import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import AddingTask from './components/AddingTask';
import { todos } from './todos.json';
class App extends Component{
  constructor(){
    super();
    this.state = {
      todos
    }
    this.handleAddTask = this.handleAddTask.bind(this);
    
  }

  handleAddTask(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
    
  }
  deleteTask(index){
    if(window.confirm('Are you sure want to delete ir?')){
    this.setState({
      todos: this.state.todos.filter((e,i)=>{
        return i!== index
      })
    })
    }
  }

  render() {
    const cardTask = this.state.todos.map((todos,i)=>{
      return(
          <div className="col-md-4" key={i}>                
              <div className="card">
              <div className="card-header">
                  <h3>
                  {todos.title}
                  </h3>
                  <span class="badge bg-warning ml-2">{todos.priority}</span>
              </div>
              <div className="card-body">
                  <p className="p">{todos.description}</p>
                  <p className="p"> <mark>{todos.responsible}</mark></p>
              </div>
              <div className="card-footer"> 
                <button 
                  className="btn btn-danger"
                  onClick={this.deleteTask.bind(this,i)}
                >
                  delete
                </button>
              </div>
          </div>
          </div>
      )
  });
   
    return (
      <div className="App">
        <div className="App-header" >
          <Navigation title="Task App" tam={this.state.todos.length}/>
          
        </div>
        <div className="App-body">
          <section>
            <AddingTask onAddTask={this.handleAddTask}/>       
          </section>
          <section>
          <div className="container">
                <div className="row mt-4">                    
                    {cardTask}
                </div>
            </div>
          </section>
          <footer class="footer mt-auto">
            <a>
              <p>brammont</p>
            </a>            
          </footer>
        </div>      
    </div>
    )
  }
}  


export default App;
