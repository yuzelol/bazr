import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/header.css'

import trolley from '../images/trolley.png'

const Header = ({basket}) => {
    
    return (
        <div id="nav-container">
            <div id="nav">
            <div className="left">
                <Link to={'/'} style={{color: 'white'}}>
                    <div className="logo">bazr</div>
                </Link>
            </div>
            <div style={{flexGrow: 1}}></div>
            <div className="right">
                <Link to={'/'} style={{color: 'white'}}>
                    <div>Home</div>
                </Link>
                <Link to={'/search'} style={{color: 'white'}}>
                    <div>Search</div>
                </Link>
                <Link to={'/careers'} style={{color: 'white'}}>
                    <div>Careers</div>
                </Link>
                <Link to={'/contact'} style={{color: 'white'}}>
                    <div>Contact us</div>
                </Link>
            <span style={{width: 18}}></span>

                <Link to={'/order'} style={{color: 'white'}}>
                    <div className="user">
                        &emsp;&nbsp;&nbsp;
                        <img src={trolley} alt="Trolley" />
                        Basket { basket.length ? `[${basket.length}]` : '' }
                    </div>
                </Link>
            </div>
        </div>
        </div>
    );  
}

export default Header