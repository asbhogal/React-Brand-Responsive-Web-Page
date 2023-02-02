import CTAButton from "./CTAButtons";
import mainLogoBlack from "../assets/logos/brand-logo-black.svg";

const Header = () => {
    return (
        <header className="Header">
            <img src={ mainLogoBlack }></img>
            <nav className="Navbar">
                <ul className="HeaderNavLinks">
                    <li className="NavItem"><a href="#">Link 1</a></li>
                    <li className="NavItem"><a href="#">Link 2</a></li>
                    <li className="NavItem"><a href="#">Link 3</a></li>
                    <li className="NavItem"><a href="#">Link 4</a></li>
                    <li className="NavItem"><a href="#">Link 5</a></li>
                </ul>
                <button className="NavbarToggle">
                    <span className="ToggleLine"></span>
                    <span className="ToggleLine"></span>
                    <span className="ToggleLine"></span>
                </button>
            </nav>
            <CTAButton 
                CTAButtonStyle="CTAButton-Dark"
            />
        </header>
    )
};

export default Header;