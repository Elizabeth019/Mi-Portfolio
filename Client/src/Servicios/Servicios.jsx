import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function ServiceCard({ title, description }) {
  return (
    <Box p="4" borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Heading fontSize="xl" mb="2">
        {title}
      </Heading>
      <Text color="black.600">{description}</Text>
    </Box>
  );
}

function Servicios() {
  return (
    <ChakraProvider>
      
      <Flex justifyContent="center" alignItems="center" h="100vh">
        <Box maxW="lg" textAlign="center">
          <Heading mb="4">Nuestros Servicios</Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
              <ServiceCard
                title="Armado y Planificación de Stands"
                description="Diseñamos y construimos stands únicos y funcionales que representan la identidad de tu marca y cautivan a tu audiencia."
              />
            </GridItem>
            <GridItem>
              <ServiceCard
                title="Creación de Muebles, Escaleras y Portones"
                description="Fabricamos muebles a medida para hogares, oficinas y espacios comerciales, así como escaleras y portones que combinan estilo y durabilidad."
              />
            </GridItem>
          </Grid>
</Box>
      </Flex>
          <Flex   bg={"rgba(0, 114, 206, 0.9)"}
        direction={{
          base: "column",
          md: "row",
        }}
        _light={{
          bg: "brand.500",
        }}
        px={8}
        py={12}
        mx="auto">
         <Box maxW="lg">
           <ServiceDescription />
           <Button mt="8" colorScheme="blue" size="lg">
             ¡Contáctanos Ahora!
           </Button>
       </Box>
       </Flex>

          {/* <Button mt="8" colorScheme="blue" size="lg">
            ¡Contáctanos Ahora!
          </Button>
          <ServiceDescription /> */}
        
    </ChakraProvider>
  );
}

export default Servicios;


function ServiceDescription() {
  return (
    <Box  w={{
      base: "full",
      md: 11 / 12,
      xl: 9 / 12,
    }}
    mx="auto"
    pr={{
      md: 20,
    }}>
      <Text color="white" fontWeight="bold" mb="4" justifyContent={"center"}>
        ¡Bienvenido a nuestro servicio especializado en armado y planificación de stands para exposiciones!
      </Text>
      <Text color="black.600" fontSize="lg" mb="4">
        En nuestro equipo, comprendemos la importancia crucial que tienen los stands en eventos y ferias comerciales. Son mucho más que simples estructuras; son la manifestación física de la identidad y los valores de tu marca, así como una herramienta poderosa para captar la atención de clientes potenciales y crear conexiones significativas.
      </Text>
      <Text color="black.600" fontSize="lg" mb="4">
        Nuestro enfoque comienza con una comprensión profunda de tus objetivos y el público al que deseas llegar. Trabajamos estrechamente contigo desde el primer contacto para entender tus necesidades, tu visión y el mensaje que deseas transmitir. Nos enorgullecemos de ofrecer un servicio personalizado que se adapte perfectamente a tus requisitos específicos y te ayude a destacar en un entorno competitivo.
      </Text>
      <Text color="black.600" fontSize="lg" mb="4">
        El proceso de planificación es fundamental para el éxito de cualquier stand de exposiciones. Nuestro equipo de expertos en diseño y arquitectura colabora contigo para desarrollar conceptos innovadores y funcionales que maximicen el impacto visual y la utilidad del espacio disponible. Desde la distribución del área hasta la selección de materiales y la integración de tecnología, cada detalle se cuida meticulosamente para garantizar una experiencia memorable para tus visitantes.
      </Text>
      <Text color="black.600" fontSize="lg" mb="4">
        La construcción y el montaje de los stands son etapas críticas en las que nos esforzamos por alcanzar los más altos estándares de calidad y profesionalismo. Contamos con un equipo altamente capacitado y experimentado que se encarga de ejecutar cada proyecto con precisión y eficiencia. Nos aseguramos de que tu stand se entregue a tiempo y se instale de manera impecable, para que puedas centrarte en interactuar con tus clientes y obtener los mejores resultados posibles.
      </Text>
      <Text color="black.600" fontSize="lg" mb="4">
        Además de proporcionar servicios de armado y planificación, también ofrecemos soluciones adicionales para complementar tu stand y mejorar la experiencia general del evento. Desde la producción de materiales promocionales hasta la coordinación logística y el soporte técnico en el lugar, estamos aquí para cubrir todas tus necesidades y garantizar el éxito de tu participación en cualquier exposición o feria comercial.
      </Text>
      <Text color="black.600" fontSize="lg" mb="4">
        En resumen, nuestro servicio de armado y planificación de stands para exposiciones está diseñado para ayudarte a destacar, atraer y cautivar a tu audiencia en cualquier evento. Confía en nosotros para convertir tu visión en realidad y llevar tu presencia en ferias comerciales al siguiente nivel. ¡Contáctanos hoy mismo para empezar a trabajar juntos en la creación de un stand que deje una impresión duradera!
      </Text>
    </Box>
  );
}

