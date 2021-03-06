import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from "@material-ui/icons/Search";
import './NavMenu.css';

import Toggle from './Toggle';

function NavMenu() {
    const themeState = useTheme();

    return (
                <>
        <nav className="header">
            <div className="header__pane">
                <Link to="/" class="headerTitle">
                    React <br/> Dark Mode
                </Link>
            </div>
                <div className="header__pane">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Deliver to Guest</span>
                        <span className="header__optionLineTwo"><LocationOnIcon fontSize="small" />Home Address</span>
                    </div>
                </Link>
            </div>


            <div className="header__pane">
                <div className="header__search">
                    <label className="header__search-label">All </label>
                    <select className="header__search-select" defaultValue={'all-dept'}>
                        <option value="all-dept">All Departments</option>
                        <option value="alexa-skills">Alexa Skills</option>
                        <option value="instant-video">Amazon Video</option>
                        <option value="appliances">Appliances</option>
                        <option value="mobile-apps">Apps &amp; Games</option>
                        <option value="arts-crafts">Arts, Crafts &amp; Sewing</option>
                        <option value="automotive">Automotive Parts &amp; Accessories</option>
                        <option value="baby-products">Baby</option>
                        <option value="beauty">Beauty &amp; Personal Care</option>
                        <option value="stripbooks">Books</option>
                        <option value="popular">CDs &amp; Vinyl</option>
                        <option value="mobile">Cell Phones &amp; Accessories</option>
                        <option value="fashion">Clothing, Shoes &amp; Jewelry</option>
                        <option value="fashion-womens">&nbsp;&nbsp;&nbsp;Women</option>
                        <option value="fashion-mens">&nbsp;&nbsp;&nbsp;Men</option>
                        <option value="fashion-girls">&nbsp;&nbsp;&nbsp;Girls</option>
                        <option value="fashion-boys">&nbsp;&nbsp;&nbsp;Boys</option>
                        <option value="fashion-baby">&nbsp;&nbsp;&nbsp;Baby</option>
                        <option value="collectibles">Collectibles &amp; Fine Art</option>
                        <option value="computers">Computers</option>
                        <option value="digital-music">Digital Music</option>
                        <option value="electronics">Electronics</option>
                        <option value="gift-cards">Gift Cards</option>
                        <option value="hpc">Health, Household &amp; Baby Care</option>
                        <option value="local-services">Home &amp; Business Services</option>
                        <option value="garden">Home &amp; Kitchen</option>
                        <option value="fashion-luggage">Luggage &amp; Travel Gear</option>
                        <option value="luxury-beauty">Luxury Beauty</option>
                        <option value="mi">Musical Instruments</option>
                        <option value="office-products">Office Products</option>
                        <option value="pets">Pet Supplies</option>
                        <option value="software">Software</option>
                        <option value="sporting">Sports &amp; Outdoors</option>
                        <option value="tools">Tools &amp; Home Improvement</option>
                        <option value="toys-and-games">Toys &amp; Games</option>
                        <option value="videogames">Video Games</option>
                        <option value="wine">Wine</option>
                    </select>
                    <input className="header__search-input" type="text" autoComplete="off" />
                    <SearchIcon className="header__search-button" style={{ fontSize: 40 }} />
                </div>
            </div>
                <div className="header__pane">
                    <Link to="/counter" className="header__link">
                        Counter
                    </Link>
            </div>
            <div className="header__pane">
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">Account & Lists</span>
                    </div>
                </Link>
            </div>
                <div className="header__pane">
                <Link to="/order" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
            </div>
                <div className="header__pane">
                <Toggle onClick={() => themeState.toggle()} darkMode={ themeState.darkMode}/>
            </div>
            </nav>
        </>
    );
}

export default NavMenu;