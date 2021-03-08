import React, {Component} from 'react';
import { todos } from '../todos.json';
class AddingTask extends Component{
    constructor(){
        super();
        this.state ={
            datos: todos
        }
    }
    render(){
        var datlength = this.state.datos.length;
        return(
            <div className="container-fluid">
                <div className="row">
                    <h2 className="h2">Adding Task</h2>
                    <div className="col">
                        <form className="row g-2">
                            <div className="col-3">
                            <label for="validationDefault01" className="form-label">Nombre</label>
                            <input type="text" class="form-control" id="validationDefault01" required />
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddingTask;