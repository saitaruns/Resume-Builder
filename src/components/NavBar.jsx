import '../styles/NavBar.css'
import BrandLogo from '../assets/brand.png'
import Button from './Button';

const NavBar = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>
            <img src={BrandLogo} alt="brand_logo" />
            Resume Builder
        </div>
        <div className='navbar__item'>
            <Button text={"Import"} type={"secondary"} />
        </div>
        <div className='navbar__item'>
            <Button text={"Export"} type={"primary"} />
        </div>
    </header>
);

export default NavBar