import React, { useState } from "react";
import "./Slider.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const images = [
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  "https://media.istockphoto.com/id/1266155634/photo/luxurious-and-elegant-bedroom-interiors.jpg?b=1&s=170667a&w=0&k=20&c=08IfswAGlYo0BFRYzV768AwF8flFC1LqiJmUKj9vHBk=",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

 

  const prevSlideHandler = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const nextSlideHandler = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      
      <div
      
        className="wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        
        {images.map((i) => (
          <div className="slide">
            <img src={i} />
            
          </div>
        ))}
        
      </div>
      
      <div className="arrows">
        <ArrowBackIcon className="arrow" onClick={prevSlideHandler} />
        <ArrowForwardIcon className="arrow" onClick={nextSlideHandler} />
      </div>
      
    </div>
  );
};

export default Slider