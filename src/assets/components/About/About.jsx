import React from "react";
import { Nav } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";

function About() {
  return (
    <>
      <NavBar />
      <div>
        <h1>ABOUT OUR PRODUCTS</h1>
        <h3>
          Our organic skincare line offers a range of natural, eco-friendly
          products designed to nourish and rejuvenate your skin without the use
          of harmful chemicals. Made from the finest botanical ingredients, each
          product is carefully crafted to enhance your skin's natural beauty
          while promoting overall health and wellness.
        </h3>
        <div className="about-body">
          <div className="about-container">
            <h4>safe and gentle</h4>
            <p>
              Unlike conventional skincare products that often contain harsh
              chemicals and synthetic ingredients, our organic products are free
              from toxins, making them safe for all skin types, including
              sensitive skin
            </p>
          </div>
          <div className="about-container">
            <h4>eco-friendly</h4>
            <p>
              Our commitment to sustainability ensures that our products are not
              only good for your skin but also for the planet. We use
              environmentally responsible packaging and ethically sourced
              ingredients.
            </p>
          </div>
          <div className="about-container">
            <h4>Nutrient-Rich</h4>
            <p>
              Organic skincare ingredients are packed with vitamins,
              antioxidants, and essential fatty acids that help repair and
              protect your skin, giving you a healthy, radiant glow.
            </p>
          </div>
          <div className="about-container">
            <h4>Ethical and Cruelty-Free</h4>
            <p>
              We prioritize ethical practices, ensuring our products are
              cruelty-free, vegan, and not tested on animals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
