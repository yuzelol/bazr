import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'

import '../styles/home.css'

import Footer from '../components/footer'

import user from '../images/user.png'
import map from '../images/map.png'
import search from '../images/search.png'
import arrowRight from '../images/arrow-right.png'
import produce from '../images/produce.jpg'

const Home = (props) => {

    const [query, setQuery] = useState('')
    const history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    const handleQuery = (event) => {
        setQuery(event.target.value)
    }

    const submitQuery = (event) => {
        if(event.key === 'Enter') {
            history.push(`/search/${event.target.value}`)
        }
    }

    return (
        <div>
            <div id="container">
                <div id="main">

                    <nav>
                        <section className="left">
                            <Link to={'/'} style={{color: 'white'}}>
                                <div style={{paddingLeft: 72}}>Home</div>
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
                        </section>
                        <section className="right">
                            <div>
                                <img src={user} alt="User" />
                                &emsp;&nbsp;&nbsp; Yusuf Ali &nbsp;
                            </div>
                        </section>
                    </nav>

                    <div id="main-text">
                        <div className="logo">bazr</div>
                        exotic goods delivered<br />from across the world
                    </div>

                </div>
                <div id="map">
                    <img src={map} alt="Map" style={{width: '100%'}}/>
                </div>
            </div>

            <div id="search">
                <img src={search} alt="Search" className="search-icon"/>
                <div className="input">
                    <input name="main-search" type="text" placeholder="Search..."
                        onChange={handleQuery} onKeyDown={submitQuery} />
                    <Link to={`/search/${query}`}>
                        <img src={arrowRight} alt="Arrow" className="arrow" />
                    </Link>
                </div>
            </div>

            <div id="container">
                <div id="infobox">
                    <div className="container-text">
                        <div className="header">
                            3 simple reasons to choose <b>bazr</b>
                        </div>
                        <div className="subheader">
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae
                        </div>
                    </div>
                    <div className="container-img">
                        <img src={produce} alt="exotic goods" />
                    </div> 
                </div>
            </div>
            <div id="cards">
                <div>
                    <p className="header">Exotic</p>
                    <p className="subheader">
                        Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis.
                    </p>
                </div>
                <div>
                    <p className="header">Fantastic</p>
                    <p className="subheader">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem.
                    </p>
                </div>
                <div>
                    <p className="header">Sublime</p>
                    <p className="subheader">
                        Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.
                    </p>
                </div>
            </div>    
            <Footer />
        </div>
    );  
}

export default Home