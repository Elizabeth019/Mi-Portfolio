// import React from "react";
// import style from "./About.module.css";

// function About (){
// return(
// <div className={style.container}>
// <h2 className={style.title}>Acerca de Nosotros</h2>
//   <hr></hr>
//   <img className={style.img} src="./asset/istockphoto-463196047-1024x1024-transformed.jpeg" alt='Imagen de química' />


//  <p className="paragraph">
// En el corazón de nuestra historia se encuentra el espíritu emprendedor de tres amigos y socios que compartieron un sueño audaz: crear una empresa que marque la diferencia. Con pasión, dedicación y un compromiso inquebrantable, nos lanzamos a la emocionante travesía empresarial, sin saber exactamente dónde nos llevaría el camino.</p>

// <p className="paragraph">
// Nuestro viaje comenzó con un sueño en mente y un pequeño equipo en el garaje de uno de nosotros. Las noches se convertían en días, y los días en noches, mientras trabajábamos incansablemente para transformar nuestra visión en realidad. Los obstáculos se presentaban en cada esquina, pero nuestra determinación no flaqueó. Sabíamos que cada desafío era una oportunidad disfrazada, y estábamos dispuestos a enfrentarlos todos.

// Con el tiempo, nuestro esfuerzo constante comenzó a dar sus frutos. Lo que una vez fue un pequeño garaje se convirtió en una oficina modesta y, finalmente, en un espacio de trabajo vibrante y lleno de vida. A medida que nuestro equipo crecía, también lo hacía nuestra pasión por ofrecer productos y servicios excepcionales.

// Hoy, miramos hacia atrás y celebramos el viaje que nos ha llevado hasta aquí. Hemos construido relaciones sólidas con nuestros clientes, quienes confían en nosotros para brindar soluciones innovadoras y de calidad. Hemos aprendido que el éxito no se mide solo en términos de ingresos, sino en el impacto que generamos en las vidas de las personas y en las comunidades que servimos.
// </p>

// <h3 className="subtitle">Nuestros Valores</h3>
// Nuestro compromiso con la excelencia, la ética y el servicio al cliente sigue siendo la base de nuestra empresa. Siempre buscamos la oportunidad de crecer, aprender y superar nuestras propias expectativas. Somos conscientes de que cada día es un nuevo capítulo en nuestra historia, y lo enfrentamos con gratitud y humildad.
// <ul className="list">
//     <li>Compromiso con la excelencia</li>
//     <li>Ética empresarial</li>
//     <li>Atención al cliente</li>
//   </ul>
//   <p className="paragraph">
// Agradecemos a todos aquellos que han sido parte de nuestro viaje: nuestros leales clientes, nuestros talentosos colaboradores y nuestras familias que nos han apoyado en cada paso. Sin ustedes, nuestro sueño no sería posible.
// </p>
// El camino puede haber sido desafiante, pero cada desafío nos ha convertido en lo que somos hoy: una empresa apasionada, comprometida con la excelencia y con una visión audaz para el futuro. Estamos emocionados por lo que vendrá a continuación y esperamos seguir siendo una parte valiosa de su vida y su éxito.

// <a href="#" className="link">Más información</a>
// <hr></hr>
//  <h3>¡Gracias por ser parte de nuestra historia!

// Atentamente,

// Quimica Stands.</h3>


//   </div>
// )
// };

// export default About;
import React from 'react'
//import style from './About.module.css'
//import { Link } from '@chakra-ui/react'
import { Link } from "react-router-dom";
//import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
//import { Heading, Image, Stack, Text, Button } from '@chakra-ui/react'
import fotoImage from '../../asset/image/fotos-quimica-stands/IMG-20230815-WA0109.jpg'
import {
  Box,
  Button,
  Flex, SimpleGrid, chakra, Image
} from "@chakra-ui/react";

export default function About() {


 return (
<>

<Flex alignItems="center" justifyContent="center" flexDirection={{ base: 'column', md: 'row' }} marginTop="5.5rem" 
  marginRight={{ base: '0', md: '1rem' }} >
  <Box flex="1" mr={{ base: 0, md: 2 }}> {/* Agregar margen derecho en todas las pantallas */}
    <Image
      src={fotoImage}
      alt="sanofi"
      fit="cover"
      w="100%"
      h="auto"
      loading="lazy"
      opacity={0.4}
    />
  </Box>
  <Box flex="1" ml={{ base: 0, md: 2 }}> {/* Agregar margen izquierdo en todas las pantallas */}
    <chakra.h1
      fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
      fontWeight="bold"
      color="rgba(0, 114, 206, 0.9)"
      _dark={{ color: "gray.300" }}
      lineHeight="shorter"
      textShadow="2px 2px 3px rgba(0, 0, 0, 0.5)"
    >
      Nuestra Historia
    </chakra.h1>
    <chakra.p
      fontSize="lg"
      color="brand.600"
      _dark={{ color: "gray.400" }}
      letterSpacing="wider"
      textAlign="justify"
    >
      En el corazón de nuestra historia se encuentra el espíritu emprendedor de tres amigos y socios que compartieron un sueño audaz: crear una empresa que marque la diferencia. Con pasión, dedicación y un compromiso inquebrantable, nos lanzamos a la emocionante travesía empresarial, sin saber exactamente dónde nos llevaría el camino.
    </chakra.p>
    <br></br>
    <chakra.p
      fontSize="lg"
      color="brand.600"
      _dark={{ color: "gray.400" }}
      letterSpacing="wider"
      textAlign="justify"
    >
    Nuestro viaje comenzó con un sueño en mente y un pequeño equipo en el garaje de uno de nosotros. Las noches se convertían en días, y los días en noches, mientras trabajábamos incansablemente para transformar nuestra visión en realidad. Los obstáculos se presentaban en cada esquina, pero nuestra determinación no flaqueó. Sabíamos que cada desafío era una oportunidad disfrazada, y estábamos dispuestos a enfrentarlos todos.
    </chakra.p>
    <br></br>
    <chakra.p
      fontSize="lg"
      color="brand.600"
      _dark={{ color: "gray.400" }}
      letterSpacing="wider"
      textAlign="justify"
    >

 Con el tiempo, nuestro esfuerzo constante comenzó a dar sus frutos. Lo que una vez fue un pequeño garaje se convirtió en una taller modesto y, finalmente, en un espacio de trabajo vibrante y lleno de vida. A medida que nuestro equipo crecía, también lo hacía nuestra pasión por ofrecer productos y servicios excepcionales.

</chakra.p>

<br></br>
    <chakra.p
      fontSize="lg"
      color="brand.600"
      _dark={{ color: "gray.400" }}
      letterSpacing="wider"
      textAlign="justify"
    >
 Hoy, miramos hacia atrás y celebramos el viaje que nos ha llevado hasta aquí. Hemos construido relaciones sólidas con nuestros clientes, quienes confían en nosotros para brindar soluciones innovadoras y de calidad. Hemos aprendido que el éxito no se mide solo en términos de ingresos, sino en el impacto que generamos en las vidas de las personas y en las comunidades que servimos.
    
    </chakra.p>
    <Link to="/contacto">
      <Button variant="boton1">Conócenos</Button>
    </Link>
  </Box>
</Flex>

 
      <Flex
        bg={"rgba(0, 114, 206, 0.9)"}
        direction={{
          base: "column",
          md: "row",
        }}
        _light={{
          bg: "brand.500",
        }}
        px={8}
        py={12}
        mx="auto"
      >
        <Box
          w={{
            base: "full",
            md: 11 / 12,
            xl: 9 / 12,
          }}
          mx="auto"
          pr={{
            md: 20,
          }}
        >
          <chakra.h2
            fontSize={{
              base: "3xl",
              sm: "4xl",
            }}
            fontWeight="extrabold"
            lineHeight="shorter"
            color="white"
            _dark={{
              color: "gray.100",
            }}
            mb={6}
          >
            <chakra.span
              mb={4}
              fontSize={{
                base: "4xl",
                md: "4xl",
                lg: "5xl",
              }}
              fontWeight="bold"
              color="white"
              _dark={{
                color: "gray.300",
              }}
              lineHeight="shorter"
              textShadow="2px 2px 3px rgba(0, 0, 0, 0.5)"
             
            >
              Y además . . .
            </chakra.span>
            <chakra.span
              display="block"
              mb={4}
              fontSize={{
                base: "4xl",
                md: "4xl",
                lg: "5xl",
              }}
              fontWeight="bold"
              color="white"
              _dark={{
                color: "gray.300",
              }}
              lineHeight="shorter"
              textShadow="2px 2px 3px rgba(0, 0, 0, 0.5)"
             
            >
              Nuestra Valores
            </chakra.span>
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{
              base: "lg",
              md: "xl",
            }}
            color="gray.100"
            _dark={{
              color: "gray.300",
            }}
            textAlign={"justify"}
          >
         Nuestro compromiso con la excelencia, la ética y el servicio al cliente sigue siendo la base de nuestra empresa. Siempre buscamos la oportunidad de crecer, aprender y superar nuestras propias expectativas. Somos conscientes de que cada día es un nuevo capítulo en nuestra historia, y lo enfrentamos con gratitud y humildad.
 <br></br>
 
 <ul style={{marginTop: "1rem", marginLeft: "3rem"}}>
     <li>Compromiso con la excelencia</li>
     <li>Ética empresarial</li>
     <li>Atención al cliente</li>
   </ul>
          </chakra.p>
          <Link to="/home">
            <Button border={"1px"} variant="boton1">
              Ir a Compras
            </Button>
          </Link>
        </Box>
      </Flex>
     
</>
) 
}