import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar (){
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && showMobileMenu) {
                setShowMobileMenu(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [showMobileMenu]);

    return (
        <div className="App">
            <div className="navbar">
                <div className="navbar-logo">Sweet Cakes</div>
                <div className={`navbar-links ${showMobileMenu ? 'show' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/about">Cart</a>
                    <a href="/Account">Account</a>

                </div>
                <div className="navbar-toggle" onClick={handleToggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;