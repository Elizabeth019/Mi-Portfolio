//  import React from "react";
// import style from "./LandingPage.module.css";
// export default function LandingPage() {
//   return (
//     <div className={style.container}>
    
// <img src="./asset/image/fotos-quimica-stands\IMG-20230815-WA0043.jpg" alt="logo" className={style.transparencia}/>

//       <div className={style.logo}>

//       <img src="./asset/image/quimica-removebg-preview.png" alt="logo" className={style.image}/>

//       <button>
//   <a href="/inicio" className={style.btn2}><span class="spn2">HELLO !</span></a>
// </button>
// </div>
//     </div>
//   )};

// //  import { useState } from 'react';
// // import { Box, Button, useTheme } from '@chakra-ui/react';
// // import { Image } from '@chakra-ui/react';
// // import datos from '../datos.js';

// // const Carousel = () => {
// //   const [activeStep, setActiveStep] = useState(0);
// //   const maxSteps = datos.length;
// //   const theme = useTheme();

// //   const handleNext = () => {
// //     setActiveStep((prevActiveStep) => (prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1));
// //   };

// //   const handleBack = () => {
// //     setActiveStep((prevActiveStep) => (prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1));
// //   };

// //   return (
// //     <Box maxW="400px" flexGrow="1">
// //       <Image
// //         src={datos[activeStep].image}
// //         alt={`Slide ${activeStep + 1}`}
// //         width="100%"
// //         height="auto"
// //         objectFit="cover"
// //       />
// //       <Box display="flex" justifyContent="center" mt={4}>
// //         <Button size="sm" onClick={handleBack} mr={2}>
// //           Back
// //         </Button>
// //         <Button size="sm" onClick={handleNext}>
// //           Next
// //         </Button>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Carousel;


// import React, { useState } from "react";
// import style from "./LandingPage.module.css";
// import { Box, Button, useTheme } from '@chakra-ui/react';
// import { Image } from '@chakra-ui/react';

// export default function LandingPage() {
//   // Definir el array de imágenes
//   const images = [
//     "./asset/image/fotos-quimica-stands/IMG-20230815-WA0043.jpg",
//     "./asset/image/fotos-quimica-stands/IMG-20230815-WA0064.jpg",
//     "./asset/image/fotos-quimica-stands/IMG-20230815-WA0112.jpg"
//   ];

  'use client'

  import React, { useState } from 'react';
  import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
  import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
  import Slider from 'react-slick';
  import style from "./LandingPage.module.css"; // Importa tu archivo de estilos
  
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
      <Box position="relative" height="633px" width="full" overflow="hidden">
       
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
  
  