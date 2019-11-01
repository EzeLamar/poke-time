import React from 'react'
import {Component} from 'react'
import './NavBar.css'

import { Link } from 'react-router-dom'

class NavBar extends Component {
    render () {
        return (
            <div className="navBar">
                <span> <Link to="/">Inicio</Link></span>
                <span> <Link to="/">Home</Link></span>
                <span> <Link to="/About">About</Link></span>
                <span> <Link to="/1">Post</Link></span>
                
            </div>
        );
    }
}

export default NavBar;