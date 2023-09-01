import { useRef, useState } from "react";
import { FaBars, FaTimes, FaRebel } from "react-icons/fa";

function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

    const toggleNavBar = () => {
        setIsNavOpen(!isNavOpen);
    };

	return (
		<header>
			<h3><FaRebel /></h3>
			<nav className={isNavOpen ? 'responsive_nav' : ''} ref={navRef}>
				<a href="/#">About</a>
				<a href="/#">Experience</a>
				<a href="/#">Projects</a>
				<a href="/#">Contact</a>
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