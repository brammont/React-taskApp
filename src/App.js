import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import AddingTask from './components/AddingTask';
import ViewTask from './components/ViewTask';
import { todos } from './todos.json';
class App extends Component{
  constructor(){
    super();
    this.state = {
      todos
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header" >
          <Navigation title="Task App"/>
        </div>
        <div className="App-body">
          <section>
            <AddingTask />       
          </section>
          <section>
            <ViewTask />
          </section>
          <footer class="footer mt-auto">
            <p>brammont</p>
          </footer>
        </div>      
    </div>
    )
  }
}  


export default App;
