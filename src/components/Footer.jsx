import brandLogoWhite from "../assets/logos/brand-logo-white.svg"

const Footer = () => {
    return (
        <footer>
            <div className="LeftFooterColumn">
                <img className="BrandLogoWhite" src={ brandLogoWhite }></img>
            </div>
            <div className="MiddleFooterColumn">
                <ul className="FooterMenu">
                    <li className="FooterMenuTitle">First column</li>
                    <li>First page</li>
                    <li>Second page</li>
                    <li>Third</li>
                    <li>Fourth</li>
                </ul>
                <ul className="FooterMenu">
                    <li className="FooterMenuTitle">Second</li>
                    <li>Fifth page</li>
                    <li>Sixth page</li>
                    <li>Eighth</li>
                </ul>
                <ul className="FooterMenu">
                    <li className="FooterMenuTitle">Third</li>
                    <li>Fifth page</li>
                    <li>Sixth page</li>
                    <li>Eighth</li>
                </ul>
            </div>
            <div className="RightFooterColumn NewsletterSignUp">
                <p>Subscribe</p>
                <input className="SignUpInput" placeholder="Enter email"></input>
                <p>Join our newsletter to stay up to date on features and releases</p>
            </div>
        </footer>
    )
};

export default Footer;