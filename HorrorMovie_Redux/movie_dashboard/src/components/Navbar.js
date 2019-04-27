import React from 'react'

const NavBar = () => {
    return (
        < nav className="navbar navbar-expand navbar-dark bg-dark" >
        
        <ul className="navbar-nav">
            
            <li className="nav-item navbar-left ">
                <a className="nav-link" href="#">Link 1 Link 1Link 1</a>
            </li>
            <li className="nav-item navbar-center">
                {/* <a className="nav-link" href="#">Link 2 Link 1Link 1Link 1</a> */}
                <input type="text"/>
            </li>
            <li className="nav-item navbar-right">
                <a className="nav-link" href="#">Link 3 Link 1</a>
            </li>

            
        </ul>

        </nav >
    )

}

export default NavBar

