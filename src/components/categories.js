import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/collections.css'

import spices from '../images/collections/spices.jpg'
import saris from '../images/collections/saris.jpg'
import oriental from '../images/collections/oriental.jpg'
import carpets from '../images/collections/carpets.jpg'

const Categories = ({setQuery}) => {
    return (
        <div>
            <div id="collection-container">
                <div onClick={() => setQuery('morocco')}>
                    <img src={spices} alt="fish"
                        style={{maxWidth: '100%'}}
                        />
                    <span>Moroccan</span>
                </div>
                <div onClick={() => setQuery('bangladesh')}>
                    <img src={saris} alt="chillis"
                        style={{maxWidth: '100%'}}
                        />
                    <span>Bangladesh</span>
                </div>
                <div onClick={() => setQuery('china')}>
                    <img src={oriental} alt="oriental"
                        style={{maxWidth: '100%'}}
                        />
                    <span>China</span>
                </div>
                <div onClick={() => setQuery('turkey')}>
                    <img src={carpets} alt="carpet"
                        style={{maxWidth: '100%'}}
                        />
                    <span>Turkey</span>
                </div>
            </div>
        </div>
    );  
}

export default Categories