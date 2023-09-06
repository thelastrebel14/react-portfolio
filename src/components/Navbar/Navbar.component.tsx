import { useRef, useState } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './Navbar.scss';

function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleNavBar = () => {
        setIsNavOpen(!isNavOpen);
    };

	return (
		<header>
			<nav className={`nav ${isNavOpen ? 'responsive_nav' : ''}`} ref={navRef}>
				<NavLink to="/react-portfolio">About</NavLink>
				<NavLink to="/experience">Experience</NavLink>
				<NavLink to="/projects">Projects</NavLink>
				<NavLink to="/contact">Contact</NavLink>
				<button
					className="nav-btn nav-close-btn"
					onClick={toggleNavBar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={toggleNavBar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;