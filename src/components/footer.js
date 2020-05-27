import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/footer.css'

const Footer = (props) => {
    return (
        <div>
            <div id="footer-container">
                <div id="footer">
                    <div style={{flexGrow: 1}}>
                        <div className="logo">bazr</div>
                        <div className="info">
                            15 Perch St<br />
                            London<br />
                            E8 2EG
                            <div style={{height: 16}}></div>
                            <div className="contact">contact@bazr.delivery</div>
                            <div className="contact">0207 690 8225</div>
                        </div>
                    </div>
                    <div className="links">
                    <Link to={'/'}>home</Link>
                    <Link to={'/search/#'}>search</Link>
                    <Link to={'/careers/#'}>careers</Link>
                    <Link to={'/contact/#'}>contact us</Link>
                </div>
                </div>
            </div>
        </div>
    );  
}

export default Footer