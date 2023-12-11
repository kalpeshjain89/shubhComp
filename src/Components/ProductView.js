import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { useLocation, useParams } from 'react-router-dom';
import "../styles/ProductView.scss";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from "../api/services";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceholderImage from '../assets/images/logo.png';

const Catalog = () => {
  const { name } = useParams();
  const location = useLocation();
  console.log('location ', location)

  const [product, setProduct] = useState(location.state || null);
  const [features, setFeatures] = useState(location.state ? location.state.features.map((desc, index) => <li key={index}>{desc}</li>) : []);
  const [mainImg, setMainImg] = useState(location.state ? {
    src: location.state.mainImg.src,
    alt: location.state.mainImg.alt,
    price: location.state.thumbnails[0].price || location.state.price
  } : {});
  const [zoomedImage, setZoomedImage] = useState(location.state ? {
    backgroundImage: `url(/images/products/${location.state.mainImg.src})`,
    backgroundPosition: '0% 0%'
  } : {});
  const [isActive, setIsActive] = useState(0);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`https://docs.google.com/spreadsheets/d/1ZvGw6Rj62R7tGGzCXn8GdiRQKOe0TrEWBlQSm2EPnCc/gviz/tq?tqx=out:csv&range=A2:M&sheet=testData&tq=SELECT%20*%20WHERE%20A%20=%20%27${name}%27`);

      const formattedResponse = response.data.replace(/(\r\n|\n|\r|")/gm, " ").split(' ,');

      let allFeatures = formattedResponse[3]?.split(/[.\r?\n]/).filter(element => element);
      let allCategories = formattedResponse[1]?.split(/[.\r?\n]/).filter(element => element);
      let allThumbnailsSrc = formattedResponse[9]?.split(' ').filter(element => element); 
      let allThumbnailsAlt = formattedResponse[10]?.split(' ').filter(element => element);
      let allThumbnailsPrices = formattedResponse[11]?.split(/[.\r?\n]/).filter(element => element);

      // console.log('allThumbnailsSrc ', allThumbnailsSrc, formattedResponse[9].split(' '))
      // console.log('allThumbnailsAlt ', allThumbnailsAlt)
      // console.log('allThumbnailsPrices ', allThumbnailsPrices, formattedResponse[11])
      let fetchedProduct = {
        "name": formattedResponse[0].toLowerCase()?.trim(),
        "features": allFeatures?.map(feature => feature.trim()),
        "price": formattedResponse[5],
        "link": formattedResponse[4],
        // "categories": allCategories.map(category => category.trim().toLowerCase().replaceAll(' ', '-')),
        "categories": allCategories?.map(category => category.trim().toLowerCase()),
        "keywords": formattedResponse[6]?.split(' '),
        "mainImg": {
          "src": formattedResponse[7]?.trim(),
          "alt": formattedResponse[8]?.trim(),
          "price": allThumbnailsPrices ? allThumbnailsPrices[0]?.trim() : formattedResponse[5]
        },
        "thumbnails": allThumbnailsSrc?.map((thumbnail, index) => {
          return {
            "src": thumbnail?.trim(),
            "alt": allThumbnailsAlt[index]?.trim(),
            "price": allThumbnailsPrices ? allThumbnailsPrices[index]?.trim() : formattedResponse[5]
          }
        })
      }

      setProduct(fetchedProduct);
      setFeatures(fetchedProduct.features.map((desc, index) => <li key={index}>{desc}</li>))
      setMainImg(fetchedProduct.mainImg);
      setZoomedImage({
        backgroundImage: `url(/images/products/${fetchedProduct.mainImg.src})`,
        backgroundPosition: '0% 0%'
      });
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (location.state == null) {
      fetchProduct();
    }
  }, []);

  const handleThumbClick = async (thumbnail, index) => {
    setIsActive(index);
    setMainImg({
      src: thumbnail.src,
      alt: thumbnail.alt,
      price: thumbnail.price
    });
    setZoomedImage({
      backgroundImage: `url(/images/products/${thumbnail.src})`
    });
  };

  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const pageX = event.pageX;
    const pageY = event.pageY;
    const x = (pageX - left) / width * 100;
    const y = (pageY - top) / height * 100;
    setZoomedImage({ 
      backgroundImage: `url(/images/products/${mainImg.src})`,
      backgroundPosition: `${x}% ${y}%` 
    });
  }

  return (
    product && <div>
      <Helmet>
        <title>Shubham Computers - {product.name}</title>
        <meta name="description" content="Shubham Computers - Product Details" />
      </Helmet>
      <Box sx={{
        p: { sm: 0, md: 4 },
        backgroundColor: '#FAFAFA'
      }}
      >
        <div className="product-wrapper">
          <div className="product-image-wrapper">
            <div className="product-image-main" onMouseMove={(event) => handleMouseMove(event)} >
              <img
                src={`/images/products/${mainImg?.src}`}
                alt={mainImg.alt}
              />
            </div>
            <div className="zoomedImage" style={zoomedImage}>
              <img className="watermark" src={PlaceholderImage} alt="" />
            </div>
            {product.thumbnails.length > 0 &&
              <div className="product-thumb-images-wrapper">
                {product.thumbnails.map((thumb, index) => (
                  <div className={isActive === index ? 'active' : ''} onClick={() => handleThumbClick(thumb, index)} key={index}>
                     <LazyLoadImage 
                      src={`/images/products/${thumb?.src}`}
                      alt={thumb.alt}
                      placeholderSrc={PlaceholderImage}
                      effect="blur"
                    />
                  </div>
                ))}
              </div>
            }
          </div>
          <div className="product-details-wrapper">
            <Typography gutterBottom variant="h1" sx={{
              fontSize: '2.5em',
              mb: 0
            }}>
              {product.name.toUpperCase()}
            </Typography>
            <div className="product-price-wrapper" style={{fontSize: "1.5rem"}}>
              &#8377; {mainImg.price }
            </div>
            {product.features.length > 0 &&
              <>
                <Typography gutterBottom variant="h3" sx={{
                  fontSize: '1.25em',
                  m: 0
                }}>
                  Product Description & Features
                </Typography>
                <ul className="product-features-list">
                  {features}
                </ul>
              </>
            }
            {product.link &&
              <>
                <Typography gutterBottom variant="h3" sx={{
                  fontSize: '1.25em',
                  m: 0,
                  mt: 3
                }}>
                  Product Link
                </Typography>
                <div>
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    {product.link}
                  </a>
                </div>
              </>
            }
          </div>
        </div>
      </Box>
    </div>
  );
}

export default React.memo(Catalog);