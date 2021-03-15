import React, {Component} from 'react';
import task from '../assets/completed-task.svg';
import './AddingTask.css';
class AddingTask extends Component{
   constructor(){
       super();
       this.state ={
        title:'',
        responsible:'',
        priority:'',
        description:''

    };
    this.handleInputTask = this.handleInputTask.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputTask(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
    });
  }
    handleSubmit(e) {
       e.preventDefault();
       this.props.onAddTask(this.state);
       
       }
    render(){
        return(
            <div class="container d-flex justify-content-center">
                <div className="row mt-4 ">
                    <div className="col-6 col-md-6">
                        <img src={task} class="img-fluid" alt="img"/>
                    </div>
                    <div className="col-6 col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3>Task Manager</h3>
                                <form onSubmit={this.handleSubmit} className="card-body ">
                                <div class="form-group">
                                    <label>Title:</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Title" name="title" onChange={this.handleInputTask}/>
                                </div>
                                <div class="form-group">
                                    <label>Responsible:</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter name" name="responsible" onChange={this.handleInputTask}/>
                                </div>
                                <div class="form-group">
                                <label>Priority:</label>
                                    <select  name="priority" class="form-select" aria-label="Default select example"  onChange={this.handleInputTask}>
                                        <option>High</option>
                                        <option>Medium</option>
                                        <option>Low</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="description" onChange={this.handleInputTask}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Add task
                                </button>
                            </form>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}
export default AddingTask;