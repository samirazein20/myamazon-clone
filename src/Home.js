import React from 'react';
import "./Home.css";
import Product from "./Product";
import {Link} from "react-router-dom";

function Home(){
    return (
        <div className="home">
            <div className="home__container">

                <img className="home__image"
                     src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684228_.jpg" alt=""
                />
                <div className="home__row">
                    <Product
                        id="123213341"
                        title="The lean startup"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
                        rating={2}
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix stand mixer for baking, stylish kitchen mixer with k-beater, Dough hook and Whisk, 5 litre Glass Bowl"
                        price={239.0}
                        image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="123213341"
                        title="The lean startup"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
                        rating={2}
                    />
                    <Product
                        id="123213341"
                        title="The lean startup"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
                        rating={2}
                    />
                    <Product
                        id="123213341"
                        title="The lean startup"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
                        rating={2}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="123213341"
                        title="The lean startup"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
                        rating={2}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home