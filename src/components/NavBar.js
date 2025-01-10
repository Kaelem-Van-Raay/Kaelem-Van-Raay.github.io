import { useState } from 'react';
import hamburger from '../assets/Navbar.png';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen((prevState => !prevState));
    };

    return (
        <div className={`Navbar ${isOpen ? 'opened' : 'closed'}`}>
            <button onClick={(toggleNavbar)}><img src={hamburger} style={{width: "100%", height: "100%"}}alt=""/></button>
            <nav>
                <ul>
                    <li><a href="#AboutMe">Home</a></li>
                    <li><a href="#Coop">Coop Placements</a>
                        <ul>
                            <li><a href="#UoG MD">UofG Managed Desktops</a>
                                <ul>
                                    <li><a href="#MD Intro">Introduction</a></li>
                                    <li><a href="#MD Employer Info">Employer Information</a></li>
                                    <li><a href="#MD Job Desc">Job Description</a></li>
                                    <li><a href="#MD Goals">Goals</a></li>
                                    <li><a href="#MD Conclusion">Conclusion</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href='#Volunteer'>Volunteer Experiences</a>
                        <ul>
                            <li><a href="#GryphHacks">GryphHacks</a></li>
                            <li><a href="#Peer">Peer Helper</a></li>
                            <li><a href="#ENG">ENG Ambition</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;