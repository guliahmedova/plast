import { useState } from 'react';
import searchIcon from '../../assets/images/searchIcon.svg';
import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import { navlist } from '../../assets/const/navlist';
import menu from '../../assets/images/menu.svg';
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { i18n } = useTranslation();
    const [navMenuOpen, setNavMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className={navMenuOpen ? 'haburger-menu' : 'haburger-menu-active'} onClick={() => {
                    setNavMenuOpen(!navMenuOpen)
                }}>
                    <img src={menu} alt="" />
                </div>
                <div className={`${navMenuOpen ? 'active-header-nav header-nav' : 'header-nav'} | d-flex justify-content-between align-items-center`}>
                    <NavLink to="/" className='logo'><img src={logo} alt="" /></NavLink>

                    <nav className='primary-nav'>
                        {navlist.map((item, index) => (
                            <NavLink key={item.id}
                                className={({ isActive }) => (isActive ? 'active-link nav-item' : 'nav-item')} to={item.to}>
                                {item.title}
                                {index < navlist.length - 1 && <span className="nav-dot"></span>}
                            </NavLink>
                        ))}
                    </nav>

                    <div className='right | d-flex align-items-center gap-2'>
                        <NavLink to="/search" className='search-link'><img src={searchIcon} alt="" /></NavLink>
                        <select
                            className='lang-dropdown'
                            value={i18n.language}
                            onChange={(e) =>
                                i18n.changeLanguage(e.target.value)
                            }
                        >
                            <option value="en">Eng</option>
                            <option value="az">Az</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar