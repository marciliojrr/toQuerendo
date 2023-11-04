// import React, { useState, useEffect } from 'react';
// import { Container, CarouselWrapper, Image, ArrowButton } from './styles';

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentIndex]);

//   return (
//     <Container>
//       <ArrowButton onClick={prevSlide}>{"<"}</ArrowButton>
//       <CarouselWrapper>
//         {images.map((image: string | undefined, index: React.Key | null | undefined) => (
//           <Image
//             key={index}
//             src={image}
//             alt={`Carousel Image ${index}`}
//             active={index === currentIndex}
//           />
//         ))}
//       </CarouselWrapper>
//       <ArrowButton onClick={nextSlide}>{">"}</ArrowButton>
//     </Container>
//   );
// };

// export default Carousel;

import React, { useState, useEffect } from "react";
import { Container, CarouselWrapper, Image, ArrowButton } from "./styles";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImage, setVisibleImage] = useState(images[0]);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setVisibleImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setVisibleImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <Container>
      <ArrowButton onClick={prevSlide}>{"<"}</ArrowButton>
      <CarouselWrapper>
        <Image src={visibleImage} alt={`Carousel Image ${currentIndex}`} />
      </CarouselWrapper>
      <ArrowButton onClick={nextSlide}>{">"}</ArrowButton>
    </Container>
  );
};

export default Carousel;
