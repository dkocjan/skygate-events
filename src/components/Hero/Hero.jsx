import React from 'react';
import { Carousel } from 'antd';

import './Hero.css';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import Slide from '../Slide';

const settings = {
  autoplay: true,
  infinite: true,
  autoplaySpeed: 3000,
  speed: 1000,
  dots: true,
  pauseOnHover: false,
};
const Hero = () => (
  <Carousel {...settings} className="hero__carousel">
    <Slide img={img1} text="Find your next experience" />
    <Slide img={img2} text="Meet new people" />
    <Slide img={img3} text="Learn from others" />
  </Carousel>
);

export default Hero;
