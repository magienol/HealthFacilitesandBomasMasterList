import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Menu, X, Home, Building, Map, Info, Phone } from 'lucide-react';
import './Style/NavBar.css'
import './Style/NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Facilities', href: '/facilities', icon: Building },
    { name: 'Boma', href: '/boma', icon: Map },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Contact Us', href: '/contact', icon: Phone },
  ];

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-brand'>
          <Link to='/'>South Sudan Health Facility and Boma List Dashboard</Link> {/* Use to instead of href */}
        </div>
        <div className='navbar-menu'>
          <div className='menu-items'>
            {menuItems.map((item) => (
              <Link key={item.name} to={item.href} className='menu-item'> {/* Use to instead of href */}
                <item.icon />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className='navbar-toggle'>
          <button onClick={toggleMenu} className='toggle-button'>
            {isOpen ? <X className='icon' /> : <Menu className='icon' />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='navbar-mobile'>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href} // Use to instead of href
              className='navbar-mobile-item'
              onClick={toggleMenu}
            >
              <item.icon />
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
