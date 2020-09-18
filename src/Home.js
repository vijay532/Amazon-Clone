

import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
                    <Product 
                    id="1234987"
                    title="Water repellant shower curtain with hooks"
                    price={29.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/81v8JAWL4OL._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    
                    <Product 
                    id="6879054"
                    title="Vivo V9"
                    price={40}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41G4oysIhKL._AC_US240_FMwebp_QL65_.jpg"
                    />

                </div>
                <div className="home__row">
                    <Product 
                    id="3495768"
                    title="Tommy Hilfiger 15 inch Orlean Black Cabin Overnighter (TH/ORLEANOVR01)"
                    price={45.99}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/41BLBzhNIVL._AC_SR160,200_.jpg"
                    />
                    <Product
                    id="9576068"
                    title="The Silent Patient Book"
                    price={59.99}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51prAShxDLL._AC_SX184_.jpg"
                    />
                    <Product
                    id="5748392"
                    title="Amazon Brand - Solimo Cessna 3 Seater Leatherette Sofa (Grey)"
                    price={100.99}
                    rating={2}
                    image="https://images-eu.ssl-images-amazon.com/images/I/511pOL89pNL._AC_US240_FMwebp_QL65_.jpg"
                    />
                    
                </div>
                <div className="home__row">
                    <Product 
                    id="5748393"
                    title="Maggie Masala Noodles"
                    price={5.99}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41JMpgdHRuL._AC_SY200_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home