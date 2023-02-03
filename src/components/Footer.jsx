import brandLogoWhite from "../assets/logos/brand-logo-white.svg"
import sendEmailIcon from "../assets/icons/SendEmailIcon.svg"

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="LeftFooterColumn">
                <img className="BrandLogoWhite" src={ brandLogoWhite } alt="The Brand logo, all in uppercase and in white bold lettering"></img>
            </div>
            <div className="MiddleFooterColumn">
                <ul className="FooterMenu">
                    <li className="FooterMenuTitle">First column</li>
                    <li className="FooterItem-1">First page</li>
                    <li className="FooterItem-2">Second page</li>
                    <li className="FooterItem-3">Third</li>
                    <li className="FooterItem-4">Fourth</li>
                </ul>
                <ul className="FooterMenu">
                    <li className="FooterMenuTitle">Second</li>
                    <li className="FooterItem-1">Fifth page</li>
                    <li className="FooterItem-2">Sixth page</li>
                    <li className="FooterItem-3">Eighth</li>
                </ul>
                <ul className="FooterMenu">
                    <li className="FooterMenuTitle">Third</li>
                    <li className="FooterItem-1">Fifth page</li>
                    <li className="FooterItem-2">Sixth page</li>
                    <li className="FooterItem-3">Eighth</li>
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