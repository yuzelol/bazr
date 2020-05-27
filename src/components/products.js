import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/products.css";

import arrowIcon from '../images/icons/arrow.png'

import ProductJson from "../mock/products.json";

const Products = ({setSelection, query}) => {
  let products = [];
  let q = query.toLowerCase();

  ProductJson.forEach((product, index) => {
    let name = product.name.toLowerCase();
    let desc = product.desc
    let keywords = product.keywords.toLowerCase()
    let country = product.country.toLowerCase();
    let type = product.type.toLowerCase()
    let price = product.price

    if (name.length > 22) {
      name = name.slice(0, 22).trim() + "…";
    }

    if (desc.length > 61) {
        desc = desc.slice(0, 61).trim() + "…"
    }

    if (!q) {
      products.push(
        <div className="product-card" key={index} onClick={() => setSelection(product)}>
          <div className="product-title">{name}</div>
          <img src={product.image} alt="test" className="product-image" />
          <div className="product-desc">{desc}</div>
        </div>
      );
    } else if (name.includes(q) || country.includes(q) || keywords.includes(q) || type.includes(q) ) {
      products.push(
        <div className="product-card" key={index} onClick={() => setSelection(product)}>
          <div className="product-title">{name}</div>
          <img src={product.image} alt="test" className="product-image" />
          <div className="product-desc">{desc}</div>
        </div>
      );
    }
  });

  return (
    <div className="product-container">
      <div className="product-flex-container">
        {products}
      </div>
    </div>
  )

};

const Product = ({selection, setSelection, basket, setBasket}) => {

    const { name, desc, country, image, price } = selection

    function addToBasket() {
      setBasket([...basket, selection])
      setSelection({})
    }

  return (
    <div>
        <div className="s-product-header-container">
            <div className="s-product-close" onClick={() => setSelection({})} >✕</div>
            <div className="s-product-header">{name}</div>
        </div>
        <div className="product-container">
        <div className="s-product-flex-container">
            <div className="s-product-image">
                <img src={`${image}`} alt={name} />
            </div>
            <div style={{width: 32}} />


            <div className="s-product-right">
                <div className="s-product-right-top">
                    <div>{desc}</div>
                    <br />
                    <div className="s-product-country">
                      <div>
                        Product of {country}
                      </div>
                      <div style={{flexGrow: 1}}>
                        <hr />
                      </div>
                    </div>
                </div>

                <div className="s-product-right-bottom">
                    <div className="s-product-price">£{price}</div>

                    <div className="s-product-btn" onClick={addToBasket}>
                        <img src={arrowIcon} alt="Arrow" className="s-product-arrow" />
                          Add to basket &emsp;&emsp;
                    </div>
                </div>
            </div>
            <div style={{width: 32}} />
        </div>
    </div>
    </div>
  );
};

const Search = ({ query, basket, setBasket }) => {

  const [selection, setSelection] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selection])

  return (
      <div>
        {
            Object.keys(selection).length
            ? <Product setSelection={setSelection} selection={selection} basket={basket} setBasket={setBasket} />
            : <Products setSelection={setSelection} query={query} />
        }
      </div>
  )
};

export default Search;
