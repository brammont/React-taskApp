import React, {Component} from 'react';
import task from '../assets/completed-task.svg'
import './AddingTask.css';
class AddingTask extends Component{
   
    render(){
        return(
            <div class="container d-flex justify-content-center">
                <div className="row m-4">
                    <div className="col-auto">
                        <img src={task} class="rounded float-left" height="500px" alt="img"/>
                    </div>
                    <div className="col-auto">
                        <div className="card">
                            <div className="card-header">
                                <h3>Task manager</h3>
                            <form className="card-body">
                                <div class="form-group">
                                    <label>Name:</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter name"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Priority</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                            </form>
                            <a href="#" class="btn btn-primary">Add task</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}
export default AddingTask;