import CTAButton from "./CTAButtons";
import mainLogoBlack from "../assets/logos/brand-logo-black.svg";
import { useState } from "react";

const Header = () => {

    const   [active, setActive] = useState("HeaderNavLinks"),
            [toggle, setToggle] = useState("NavbarToggle");

    const navToggle = () => {
        active === "HeaderNavLinks" 
        ? setActive("HeaderNavLinks NavActive") 
        : setActive("HeaderNavLinks");

        toggle === "NavbarToggle"
        ? setToggle("NavbarToggle ToggleActive")
        : setToggle("NavbarToggle");
    };

    return (
        <header className="Header">
            <img src={ mainLogoBlack } alt="The Brand logo, all in uppercase and in black bold lettering"></img>
            <nav className="Navbar">
                <ul className={ active }>
                    <li className="NavItem"><a href="#">Link 1</a></li>
                    <li className="NavItem"><a href="#">Link 2</a></li>
                    <li className="NavItem"><a href="#">Link 3</a></li>
                    <li className="NavItem"><a href="#">Link 4</a></li>
                    <li className="NavItem"><a href="#">Link 5</a></li>
                </ul>
                <button className={ toggle } onClick={ navToggle }>
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