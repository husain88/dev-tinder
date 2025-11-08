import {BRAND_LOGO_URL} from '../utils/constants';
const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={BRAND_LOGO_URL} alt="Logo" />
            </div>
            <div className="header__nav">
                <nav>
                    <ul>   
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;