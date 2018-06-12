import React from 'react';
import { Carousel } from 'antd';

import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import Slide from '../Slide';

const Hero = () => (
  <Carousel autoplay>
    <Slide
      img={img1}
      text="Find your next experience"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        atque deleniti nam perferendis reprehenderit. Atque aut culpa earum
        error eveniet incidunt, ipsa ipsam, molestiae necessitatibus nobis
        officia qui sunt ut."
    />
    <Slide
      img={img2}
      text="Meet new people"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        atque deleniti nam perferendis reprehenderit. Atque aut culpa earum
        error eveniet incidunt, ipsa ipsam, molestiae necessitatibus nobis
        officia qui sunt ut."
    />
    <Slide
      img={img3}
      text="Learn from others"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        atque deleniti nam perferendis reprehenderit. Atque aut culpa earum
        error eveniet incidunt, ipsa ipsam, molestiae necessitatibus nobis
        officia qui sunt ut."
    />
  </Carousel>
);

export default Hero;
