import React, { useState } from "react";
import "./App.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div>
            <header className="header">
                <div className="logo-nav-links">
                    <div className="logo">IconifyHub</div>
                    <nav className="nav">
                        <a href="#icons" className="nav-left">
                            Icons
                        </a>
                        <a href="#pricing" className="nav-left">
                            Pricing
                        </a>
                        <a href="#illustrations" className="nav-left1">
                            Illustrations
                        </a>
                    </nav>
                </div>
                <div className="navbar-right">
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                    />
                    <button className="new-button nav-right">New</button>
                    <span
                        className="material-symbols-outlined menu"
                        onClick={handleMenu}
                    >
                        menu
                    </span>
                </div>
            </header>
            {menuOpen ? (
                <div className="sideNav-div">
                        <nav className="side-nav">
                            <a href="#icons">Icons</a>
                            <a href="#pricing">Pricing</a>
                            <a href="#illustrations">Illustrations</a>
                        </nav>
                    <div className="side-nav-input">
                        <input
                            type="text"
                            placeholder="Search"
                            className="side-search-input"
                        />
                        <button className="side-new-button">New</button>
                        <div className="side-profile-div">
                            <img src="https://images.pexels.com/photos/13010935/pexels-photo-13010935.jpeg?auto=compress&cs=tinysrgb&w=1440&h=150&dpr=2" />
                            <p>Sachin Bhujel</p>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Navbar;
