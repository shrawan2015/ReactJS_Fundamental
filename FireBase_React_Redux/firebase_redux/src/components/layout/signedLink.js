import React from 'react'
import {NavLink} from 'react-router-dom'

const signInLink = () => {
    return(
        <ul className="right">
            <li>
                <NavLink to='/'>
                    New Project
                </NavLink>  </li>
                <li>  <NavLink to='/'>
                         Logout
                </NavLink>  </li>
                <li> <NavLink to='/' className='btn btn-floting pink lighten-1'>
                SS
                </NavLink>
            </li>
        </ul>
    )
}

export default signInLink