import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceholderImage from '../assets/images/logo.png';

const Product = (props) => {
  const navigate = useNavigate();
  const {product} = props;

  const handleProductClick = () => {
    navigate(`/products/view/${product.name}`, {state: product});
  };

  return (
    <Card sx={{
      flexBasis: { xs: '48%', sm: '30.5%', md: '22.5%', lg: '17.5%' },
      position: 'relative',
      border: '1.5px solid #ccc'
    }} key={product.id} className='product-list'>
      <CardActionArea onClick={handleProductClick}>
        <div className='card-media-wrapper'>
          <LazyLoadImage 
            src={`./images/products/${product?.mainImg?.src}`}
            alt={product.mainImg.alt}
            placeholderSrc={PlaceholderImage}
            effect="blur"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{
            mb: 0,
            fontSize: { xs: '1.25em', md: '1.5em' },
            lineHeight: 1,
            textTransform: "uppercase",
            wordWrap: "break-word"
          }}>
            {product.name}
          </Typography>
          {/* <div className="product-price-wrapper">&#8377; {product.price}</div> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default React.memo(Product);