import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.css";
import logo from "../assets/logo2.png";

function NavBar() {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

// NAVBAR

    return (
        <header>
            <img src={logo} alt='logo' />
			<nav ref={navRef}>
				<a href="/#" className='mid'>Home</a>
				<a href="/#" className='mid'>Platform</a>
				<a href="/About" className='mid'>About</a>

				<a href="/Register" className='loj'>Register</a>
				<a href="/login" className='log'>Login</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>

			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>

        </header>
    );
}

export default NavBar;