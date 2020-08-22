import React from 'react';
import {ReactComponent as Logo} from "./assets/vinyl-record.svg";


const Header = () => {
    return (
        <div className="logo-container">
            <h1 className="logo">GR<Logo className ="logo-vinyl"/>OVE</h1>
            <hr className="logo-underline"/>
        </div>
    )
}

export default Header;