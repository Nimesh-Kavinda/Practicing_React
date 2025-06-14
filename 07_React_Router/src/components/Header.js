import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
      <img src={Logo} alt="RouteMate Logo" />
      <span>RouteMate</span>
      </Link>
      <nav className="navigation">
        <Link to="/" className='link'>Home</Link>
        <Link to="/products" className='link'>Products</Link>
        <Link to="/contact" className='link'>Contact</Link>
      </nav>
    </header>
  )
}
