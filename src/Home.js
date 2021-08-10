import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/Other/RB-3968_SVOD_MultiTitle_GW_Test/AMZN_RB-3968_SVOD_MultiTitle_GW_Control_EN_GWBleedingHero_V2_3000x1200._CB668890782_.jpg"
          alt="Background Image"
        />

        <div className="home_row">
          <Product
            title="Sawyer Mini Filter"
            price={19.97}
            image="https://m.media-amazon.com/images/I/81Dhvd3jvCL._AC_SY400_.jpg"
            rating={5}
          />
          <Product title="Acer Aspire 5 A515-46-R14K Slim Laptop, 15.6 Full HD IPS, AMD Ryzen 3 3350U Quad-Core Mobile Processor, 4GB DDR4, 128GB NVMe SSD, WiFi 6, Backlit KB, Amazon Alexa, Windows 10 Home (S mode)" 
          price={347.00} 
          image="https://m.media-amazon.com/images/I/71AmKW4yuMS._AC_SL1500_.jpg" 
          rating={4} />
        </div>

        <div className="home_row">
          <Product title="Core 9 Person Instant Cabin Tent - 14' x 9'" price={249.99} image="https://m.media-amazon.com/images/I/81ry4uGOeBL._AC_UY327_FMwebp_QL65_.jpg" rating={4} />
          <Product title="Randolph USA | Gold Classic Aviator Sunglasses for Men or Women 100% UV" price={236.21} image="https://m.media-amazon.com/images/I/61vAEOkITnL._AC_UL480_FMwebp_QL65_.jpg" rating={5} />
          <Product title="JBL Xtreme 2, Waterproof Portable Bluetooth Speaker, Blue" price={219.00} image="https://m.media-amazon.com/images/I/81kAa5OtH9L._AC_SR360,240_QL70_.jpg" rating={5} />
        </div>

        <div className="home_row">
          <Product title="Squirrel Buster Plus Squirrel-proof Bird Feeder w/Cardinal Ring and 6 Feeding Ports, 5.1-pound Seed Capacity, Adjustable, Pole-mountable (POLE ADAPTOR SOLD SEPARATELY), Green" price={104.13} image="https://m.media-amazon.com/images/I/71ywhCtE7RL._AC_UL480_FMwebp_QL65_.jpg" rating={5} />
        </div>
      </div>
    </div>
  );
}

export default Home;
