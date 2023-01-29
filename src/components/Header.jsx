import CTAButton from "./CTAButtons";
import mainLogoBlack from "../assets/logos/brand-logo-black.svg";

const Header = () => {
    return (
        <header className="Header">
            <img src={ mainLogoBlack }></img>
            <nav>
                <ul className="HeaderNavLinks">
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                    <li>Link 5</li>
                </ul>
            </nav>
            <CTAButton />
        </header>
    )
};

export default Header;