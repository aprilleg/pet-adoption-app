import React from 'react'
import "./Hero.css"
import HeroDog from "../../assets/hero-dog.jpg"

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="intro">
        <h2>Ready to Adopt!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
          mollitia quae officiis sequi soluta voluptates maiores nemo recusandae
          voluptate explicabo illo est labore a, delectus deserunt sint voluptas
          autem id.
        </p>
        <button>Adopt a Dog</button>
      </div>
        <img src={HeroDog} alt="Dog" className="hero-photo" />
    </div>
  );
}

export default Hero