import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLink from './signedLink'
import SignedOutLink from './signedOutLink'

const navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">
                    Marioplan
                </Link>
                
                <SignedInLink />
                <SignedOutLink />

            </div>

        </nav>
    )
}

export default navbar