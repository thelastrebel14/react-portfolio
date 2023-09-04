import { useRef, useState } from "react";
import { FaBars, FaTimes, FaRebel } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Navbar.scss';

function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleNavBar = () => {
        setIsNavOpen(!isNavOpen);
    };

	return (
		<header>
			<h3><FaRebel/></h3>
			<nav className={`nav ${isNavOpen ? 'responsive_nav' : ''}`} ref={navRef}>
				<Link to="/">About</Link>
				<Link to="/experience">Experience</Link>
				<Link to="/projects">Projects</Link>
				<Link to="/contact">Contact</Link>
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