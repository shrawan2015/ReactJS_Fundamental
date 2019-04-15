import React from 'react'
import {Link ,NavLink,withRouter} from 'react-router-dom'


const Navbar = (props) => {
    console.log(props)
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Horror Movie</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/favourite">Favourite</NavLink></li>
                    <li><NavLink to="/contact">Profile</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
