import React, {Component} from 'react';
import { todos } from '../todos.json';
class   ViewTask extends Component{
    constructor(){
        super();
        this.state ={
            datos: todos
        }
    }
    render(){
              
        const cardTask = this.state.datos.map((datos,i)=>{
            return(
                <div className="col-md-4 col-4 p-1">                
                    <div className="card mt-2">
                    <div className="card-header">
                        <h3>
                        {datos.title}
                        </h3>
                        <span class="badge bg-danger ml-2">{datos.priority}</span>
                    </div>
                    <div className="card-body">
                        <p className="p">{datos.description}</p>
                        <p className="p"> <mark>{datos.responsible}</mark></p>
                    </div>
                </div>
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row mt-4">                    
                    {cardTask}
                </div>
            </div>
        )}}
export default ViewTask;