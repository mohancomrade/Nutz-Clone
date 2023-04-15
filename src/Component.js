import React from "react";
import Navbar from "./Navbar";
import Brand from "./Brand";
import About from "./About";
import Card from "./Card";
import Features from "./Features";
import Trust from "./Trust";
import Footer from "./Footer";
// import Image from "./Image";
function Component() {
  return (
    <div>
      <Navbar />
      <Brand />
      {/* <Image/> */}
      <About />
      <Card />
      <Features />
      <Trust />
      <Footer />
     
    </div>
  );
}

export default Component;
