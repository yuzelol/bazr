import React, { useState, useEffect } from "react";

import '../styles/body.css'
import "../styles/search.css";

import search from '../images/search-black.png'
import cross from '../images/icons/cross.png'

import Header from "../components/header";
import Categories from '../components/categories'
import Products from '../components/products'
import Footer from "../components/footer";

const Search = ({searchTerm, basket, setBasket}) => {

  const [query, setQuery] = useState('')

  useEffect(() => {
    if(!!searchTerm) {
      setQuery(searchTerm)
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  function handleQuery(event) {
    setQuery(event.target.value)
  }

  function handleSelect(event) {
    setQuery(event.target.value)
  }

  function handleSlider(event) {
    // console.log(event.target.value)
  }

  return (
    <div>
      <Header basket={basket}/>
        <div id="fullpage-container-search">
          <div id="flex-container">
            <div className="horz-divider" />
              <div className="content">
                <div className="search-left">
                  <div className="search-bar">
                    <img src={search} alt="Search" className="search-bar-icon" />
                    <input type="text" 
                      value={query}
                      onChange={handleQuery}
                      placeholder="Search..."
                      className="search-bar-input"
                    />
                    {
                      !!query
                      ? <img src={cross} alt="Clear"
                        className="search-bar-clear"
                        onClick={() => setQuery('')} />
                      : ''
                    }
                  </div>
                <div className="horz-divider" />
                    <div className="search-right-options">

                        <div className="search-right-options-header"
                          style={{fontSize: "1.1em", marginBottom: 18}}>Price</div>
                        <div className="search-slider">
                          <div>
                            £20.00
                          </div>
                          <div className="search-slider-central">
                              <input type="range" className="slider"
                                min="20" max="200" onChange={handleSlider} />
                          </div>
                          <div>
                            £200.00
                          </div>
                        </div>

                        <div className="search-divider" />


                      <div style={{position: 'relative', top: -6}}>
                          <div className="search-right-options-header">Country</div>
                          <div className="search-slider">

                              <select onChange={handleSelect}>
                                  <option value="morocco">Morocco</option>
                                  <option value="bangladesh">Bangladesh</option>
                                  <option value="sri lanka">Sri Lanka</option>
                                  <option value="china">China</option>
                                  <option value="india">India</option>
                                  <option value="jordan">Jordan</option>
                                  <option value="turkey">Turkey</option>
                              </select>

                          </div>

                          <div style={{height: 22}} />

                          <div className="search-right-options-header">Category</div>
                          <div className="search-slider">

                              <select onChange={handleSelect}>
                                  <option value="ornaments">Ornaments</option>
                                  <option value="furniture">Furniture</option>
                                  <option value="garments">Garments</option>
                                  <option value="food">Food</option>
                                  <option value="misc">Misc</option>
                              </select>
                          </div>
                      </div>

                    </div>
                  <div className="search-right-filler" />
                </div>
                <div className="vert-divider" />
                <div className="search-right">
                  <Categories setQuery={setQuery} />
                  <div className="horz-divider" />
                  <Products query={query} basket={basket} setBasket={setBasket} />
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default Search;