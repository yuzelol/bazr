import React from 'react';

import '../styles/body.css'

import whiteArrow from '../images/white-arrow.png'
import silkroad from '../images/silkroad.jpeg'
import homeMap from '../images/home-map.png'

const Body = ({data, children}) => {
    return (
        <div >
            <div id="fullpage-container">
                <div id="flex-container">

                <div className="horz-divider" />

                <div className="content">
                    
                    <div className="left">
                        {   
                            data.header &&
                            <div>
                                <span className="header">
                                    { data.header }
                                </span>
                                <hr />
                            </div>
                        }
                        <div id="content-container">
                            <div style={{flexGrow: 1}}>
                                {
                                    data.type === 'Careers'
                                    ? data.content :
                                    data.type === 'Contact'
                                    ? children :
                                    data.type === 'Order'
                                    ? data.content : ''
                                }
                            </div>
                            <div className="btn-container">
                                {   
                                    data.button ?
                                    <div className="btn">
                                        <img src={whiteArrow} alt="Arrow" />
                                        { data.buttonText }
                                    </div> : ''
                                }
                            </div>
                        </div>
                    </div>

                    <div className="vert-divider" />

                    <div className="right">
                        <div className="img-container"
                            style={ data.imageHeight ? {minHeight: `${data.imageHeight}`} : {} }>
                            <div id="img">
                                {
                                    data.type === 'Careers'
                                    ? <img src={silkroad} alt="Silk Road"
                                        className="career"
                                        style={{position: 'relative', top: -70, left: -32}}/> :
                                    data.type === 'Contact' || data.type === 'Order'
                                    ? <img src={homeMap} alt="Home Map"
                                        className="contact" /> : ''
                                }
                            </div>
                        </div>
                        <div style={{minHeight: 50, background: 'white'}} />
                        <div className="info">{ data.info }</div>
                    </div>
                
                </div>
                </div>
            </div>
        </div>
    );  
}

export default Body