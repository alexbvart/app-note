import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './styles/navigation.css'
const Navigation = () => {
    return (
        <>
            <nav className="wrapper nav">
                <Link to='/' className="a">
                    Home
                </Link>             
                <Link  to='/create' className="hvr-grow a">
                    New
                </Link>             
{/*                 <Link to='/'>
                    Edit
                </Link>  */}            
                <Link to='/user' className="a">
                    User
                </Link>             


            </nav>
        </>
    );
}
export default Navigation;