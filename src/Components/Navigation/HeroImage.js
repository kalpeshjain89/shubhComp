import React from "react";
import "../../styles/HeroImage.scss";
import HeroImg from '../../assets/images/hero-image.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';

const HeroImage = () => {
  return (
    <Box className='hero-wrapper' maxWidth="xl">
      <LazyLoadImage
        src={HeroImg}
        alt=""
        effect="blur"
      />
      <h1>SHUBHAM COMPUTERS</h1>
      <p>COMPUTER ACCESSORIES and more...</p>
    </Box>
  );
}

export default React.memo(HeroImage);