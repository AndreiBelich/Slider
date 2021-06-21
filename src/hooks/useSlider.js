import { useState, useEffect } from "react";
import useData from "hooks/useData";

 const useSlider = (loadData) => {
  const ERROR_SLIDE = "https://habrastorage.org/getpro/habr/upload_files/a01/cfb/160/a01cfb160c1e83d50a0e1c6b4d239974.jpg";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const { data, isFetching, error } = useData(loadData);

  useEffect(() => {
    if(!isFetching){
      setSlides(data);
    }
    if(error){
      setSlides([ERROR_SLIDE])
    }
  }, [data, isFetching, error]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  }

  const getSlide = () => {
    if(slides){
      return slides[currentIndex];
    }
  }

  return { nextSlide, prevSlide, getSlide, ERROR_SLIDE};
}

export default useSlider;