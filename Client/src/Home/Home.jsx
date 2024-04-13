import React from "react";
import Card from "../Card/Card";
import style from "./Home.module.css";
import 'animate.css';
import { Flex, Box, Text } from "@chakra-ui/react";
function Home() {
  return (

    // < div className={style.container}>
    //   {/* <hr></hr> */}
    //   <h1 className={style.title}>¡¡Bienvenidos a nuestra página	web!! </h1>
     
    //   <div className={style.cards}>
    //   <Card />
    //   </div>
    // </div>
<>
<Flex alignItems="center" justifyContent="center" flexDirection={{ base: 'column', md: 'row' }}>
<Box flex="1" mr={{ base: 0, md: 2 }}>
      <div className={style.container}>
        {/* <hr></hr> */}
        <h1 className={style.title}>¡¡Bienvenido a Quimica Stands!! </h1>
        <Box >
          
<Text  margin={"10px"}>
Somos tu taller de confianza en el mundo del diseño y la construcción de stands para exposiciones. Nuestro equipo de expertos, entiende que un stand no es solo una estructura; es la manifestación de tu marca, una oportunidad para cautivar a tu audiencia y dejar una impresión duradera.
</Text>

<Text margin={"10px"}>
Con una combinación de creatividad, experiencia y compromiso con la excelencia, nos esforzamos por superar tus expectativas en cada proyecto. Desde la conceptualización hasta la implementación, nuestro equipo de expertos está aquí para convertir tus ideas en realidad y hacer que tu presencia en ferias comerciales sea inolvidable.
</Text>

<Text margin={"10px"}>
Explora nuestro sitio para descubrir cómo podemos ayudarte a destacar en tu próximo evento. ¡Estamos emocionados de trabajar contigo para crear un stand que refleje la esencia de tu marca y te lleve al siguiente nivel de éxito!
</Text>
<Box>
¡Bienvenido a la experiencia Quimica Stands!
</Box>
</Box>
        <div className={style.cards}>
          <Card />
        </div>
      </div>
      </Box>
    </Flex>

    </>
  );
}

export default Home;