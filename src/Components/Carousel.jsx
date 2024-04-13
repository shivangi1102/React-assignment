// Carousel.js
import React, { useState } from "react";
import {
  IconButton,
  StyledButtons,
  StyledCarousel,
  StyledImage,
} from "./style";
import { FiHeart } from "react-icons/fi";
import { TiArrowForwardOutline } from "react-icons/ti";

import "./styled.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const style = {
    backgroundColor: "rgba(256, 256, 256)",
    border: "1px solid rgba(256, 256, 256)",
    borderRadius: "50%",
    padding: "5px",
    margin: "5px",
  };

  return (
    <StyledCarousel>
      <StyledButtons>
        <TiArrowForwardOutline size="19px" style={style} />

        <FiHeart size="19px" style={style} />
      </StyledButtons>

      <button className="prev" onClick={prevImage}>
        &#10094;
      </button>
      <StyledImage src={images[currentIndex].image} alt="House" />
      <button className="next" onClick={nextImage}>
        &#10095;
      </button>
    </StyledCarousel>
  );
};

export default Carousel;
