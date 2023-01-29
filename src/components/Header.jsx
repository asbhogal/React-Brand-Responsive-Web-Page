import mainLogoBlack from "../assets/logos/brand-logo-black.svg";

const Header = () => {
    return (
        <header>
            <img src={ mainLogoBlack }></img>
            <nav>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                    <li>Link 5</li>
                </ul>
            </nav>
            <button className="CTAButton">Action</button>
        </header>
    )
};

export default Header;