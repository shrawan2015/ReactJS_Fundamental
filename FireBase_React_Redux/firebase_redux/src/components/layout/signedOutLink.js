import React from 'react'
import {NavLink} from 'react-router-dom'

const signedOutLink = () => {
    return(
        <ul className="right">
            
            <li>
                <NavLink to='/signout'>
                    SignUp
                </NavLink>  
            </li>
                
            <li>  <NavLink to='/signin'>
                         Login
                  </NavLink>  
            </li>
                
        </ul>
    )
}

export default signedOutLink