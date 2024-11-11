import React, { useState } from "react";
import "./Styles/MainNavbar.css";

const MainNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="main-navbar">
            <div className="logo">Modaplug ZA</div>

            <div className="search-bar">
                <input type="text" placeholder="Search Products" />
                <button>Search</button>
            </div>

            <div className="nav-links">
                <button className="add-brand-btn">Add Your Brand</button>
                <button className="wishlist-btn">Wishlist</button>
                <button className="cart-btn">Bag (0)</button>
            </div>

            {/* Hamburger Menu Icon */}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <button className="add-brand-btn">Add Your Brand</button>
                    <button className="login-btn">Login/Sign Up</button>
                    <button className="wishlist-btn">Wishlist</button>
                    <button className="cart-btn">Bag (0)</button>
                </div>
            )}
        </nav>
    );
};

export default MainNavbar;
