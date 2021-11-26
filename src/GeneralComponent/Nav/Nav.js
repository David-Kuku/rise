import React, { useState } from 'react'
import logo_rise from '../../Assets//logo_rise.svg'
import './Nav.css'

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SidebarData = [
    {
        title: 'Home',
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'Investment Club',
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'FAQs',
        path: '/',
        cName: 'nav-text'
    },

    {
        title: 'Blogs',
        path: '/',
        cName: 'nav-text'
    },
];



const Nav = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="nav_container">
            <div className="logo">
                <img src={logo_rise} alt="logo" />
            </div>
            <div className="nav_items">
                <ul className="nav_list">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Investment Club</li>
                    <li>Blog</li>
                    <li>About Us</li>
                    <li>FAQs</li>
                </ul>
            </div>

            <div className="mobile_sidenav">
                <div>
                    <FaIcons.FaBars onClick={showSidebar} />
                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav
