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
        
        return(
            <nav class="navbar">
                <div class="container-fluid">
                    <a className="navbar-brand">
                    <img src={brandImage} width="30" height="24" className="d-inline-block align-top" />
                    {this.props.title }
                    </a>
                </div>                    
            </nav>
        )
    }
}
export default Navigation;