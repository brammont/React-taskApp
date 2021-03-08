import './App.css';
import Navigation from './components/Navigation';
import AddingTask from './components/AddingTask';
import ViewTask from './components/ViewTask';
function App() {
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
        <footer>
        footer
      </footer>
      </div>
      
    </div>
  );
}

export default App;
