import React, { Component } from "react";

import Image from "./Image"
import Cards from "./Cards"
import Time from "./Time";


import FlipCard from "./FlipCard"
const Home = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
      });
    return <div>
    
    <Image />
    <Cards />
    <FlipCard/>
    <Time />
    </div>
    
}
export default Home;