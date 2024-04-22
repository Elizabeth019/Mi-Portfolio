import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Image } from '@chakra-ui/react';
import { getAllPhotos } from '../Redux/Actions/actions';
//import  {photos } from '../Redux/reducer'
import stands from '../datos';


const itemsPerPage = 16; // Cantidad de imágenes por página

export default function PaginatedImageList() {
  const dispatch = useDispatch();
const imageData = useSelector(state => state.photos);
console.log(imageData)
const [page, setPage] = useState(0);

useEffect(() => {
  dispatch(getAllPhotos());
}, [dispatch]);

const handleNextPage = () => {
  setPage(prevPage => prevPage + 1);
};

const handlePrevPage = () => {
  setPage(prevPage => prevPage - 1);
};

const startIndex = page * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const paginatedItems = imageData && imageData.slice(startIndex, endIndex);
//const paginatedItems = stands.slice(startIndex, endIndex);



  return (
    <Box maxW="1300px" margin="0 auto">
      <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={4}>
        {paginatedItems.map((stand, index) => (
          <Box key={index}>
            <Image src={stand.url} alt={stand.title} boxSize="300px" />
            {/* <Image src={stand.image} alt={stand.title} boxSize="300px" /> */}
          </Box>
        ))}
      </Box>
      <Box textAlign="center" marginTop="10px">
      {page !== 0 && (
          <Button variant="contained" onClick={handlePrevPage} disabled={page === 0}>
          Anterior
        </Button>
      )}
         {imageData && endIndex < imageData.length && (
          <Button variant="contained" onClick={handleNextPage}>
            Siguiente
          </Button>
        )}
      </Box>
    </Box>
  );
}
