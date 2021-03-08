import React, {Component} from 'react';
import brandImage from '../logo.svg';
import { todos } from '../todos.json';
import './Navigation.css';
class Navigation extends Component{
    constructor(){
        super();
        this.state = {
            dat : todos

        }
    }

    render(){
        var dataleght = this.state.dat.length;
        return(
            <nav class="navbar">
                <div class="container-fluid">
                    <a className="navbar-brand">
                    <img src={brandImage} width="30" height="24" className="d-inline-block align-top" />
                    {this.props.title }
                    </a>
                    <h6>¿How many task? <span class="badge bg-info text-dark">{dataleght}</span></h6>
                </div>                    
            </nav>
        )
    }
}
export default Navigation;