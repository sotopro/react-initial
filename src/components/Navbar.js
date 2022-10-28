import React from "react";

const NavBar = () => {
    return (
        <div className="navbar">
         <ul className="navbar-bar">
            <li className="logo">
                <a href="#" className="nav-link">
                    <i className="fa-solid fa-wand-magic-sparkles"/>
                    <span className="link-text logo-text">Cool Shop</span>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="fa-solid fa-house"/>
                    <span className="link-text">Home</span>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="fa-solid fa-building"/>
                    <span className="link-text">About</span>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="fa-solid fa-cloud"/>
                    <span className="link-text">Services</span>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="fa-solid fa-address-book"/>
                    <span className="link-text">Contacts</span>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="fa-solid fa-cloud-sun"/>
                    <span className="link-text">Themefy</span>
                </a>
            </li>
         </ul>
        </div>
    );
};

export default NavBar;