import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/Other/RB-3968_SVOD_MultiTitle_GW_Test/AMZN_RB-3968_SVOD_MultiTitle_GW_Control_EN_GWBleedingHero_V2_3000x1200._CB668890782_.jpg"
          alt="Background Image"
        />

        <div className="home_row">
           <Product title="Sawyer Mini Filter" 
           price={19.99} 
           image="https://m.media-amazon.com/images/I/81Dhvd3jvCL._AC_SY400_.jpg" 
           rating={5}
           />
           <Product /> 
        </div>

        <div className="home_row">
            <Product /> 
            <Product /> 
            <Product /> 
        </div>

        <div className="home_row">
        <Product /> 
        </div>

      </div>
    </div>
  );
}

export default Home;
