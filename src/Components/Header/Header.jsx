import Logo from '../../images/amazon.png'
import './Header.css'
// import Header from './Header';

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />

            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>

        </div>
    );
};

export default Header;