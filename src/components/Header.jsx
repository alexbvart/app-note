import React, { useState } from 'react';
import './styles/header.css';
const Header = ({children}) => {
    return (
        <>
            <header className="header">
                <div className="wrapper">
                    <div className="header-grid">
                        <div>
                            <h1 className="title">Notes</h1>
                            <p className="header-total">Total Followers: 23, 004</p>
                        </div>
                        {children}
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;