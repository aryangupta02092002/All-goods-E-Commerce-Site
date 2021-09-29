import React from 'react'
import Product from './Product';
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img className = "home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""
            />
            

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                id="421213"
                title="The Lean Startup"
                price={800}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
                />  
                <Product
                id="613212"
                title="Boat Airdopes 131"
                price={1499}
                rating={5}
                image="https://5.imimg.com/data5/SELLER/Default/2020/11/ME/KA/DT/99149733/21-500x500.jpg"
                />  
            </div> 
            <div className="home__row">
                <Product
                id="653216"
                title="Fit-Bit"
                price={999}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />  
                <Product
                id="123134"
                title="Alexa"
                price={1199}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
                />  
                <Product
                id="464613"
                title="Guitar"
                price={2499}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71Iiu7KDOEL._SX425_.jpg"
                />  
            </div>
            <div className="home__row">
                <Product
                id="421213"
                title="Wolblix Outdoor HD Monocular Space Telescope"
                price={800}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41ViEgmMrOL._SY355_.jpg"
                /> 
            </div>
            {/* Product */}
        </div>
    )
}

export default Home
