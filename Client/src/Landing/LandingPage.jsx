  'use client'
import React, { useState } from 'react';
  import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
  import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
  import Slider from 'react-slick';
  import style from "./LandingPage.module.css";
  
  const LandingPage = () => {
    const [slider, setSlider] = useState(null);
  
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });
  
    const cards = [
      "./asset/image/fotos-quimica-stands/IMG-20230815-WA0043.jpg",
      "./asset/image/fotos-quimica-stands/IMG-20230815-WA0064.jpg",
      "./asset/image/fotos-quimica-stands/IMG-20230815-WA0112.jpg"
    ];
  
    const settings = {
      dots: true,
      arrows: false,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    const handleNext = () => {
      slider?.slickNext();
    };
  
    const handleBack = () => {
      slider?.slickPrev();
    };
  
    return (
      <Box position="relative" height="633px" width="full" overflow="hidden"  backgroundColor= "#212121" >
       
       <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

         {/* Logo y botón */}
         <div className={style.logo}>
          <img src="./asset/image/quimica-removebg-preview.png" alt="logo" className={style.image} />
          <button>
            <a href="/inicio" className={style.btn2}><span className="spn2">HELLO !</span></a>
          </button>
        </div>
      
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={handleBack}>
          <BiLeftArrowAlt />
        </IconButton>
        
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={handleNext}>
          <BiRightArrowAlt />
        </IconButton>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Box
              key={index}
              height={'3xl'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
              className={style.transparencia}
            />
          ))}
        </Slider>
      
      </Box>
    );
  }
  
  export default LandingPage;
  
  