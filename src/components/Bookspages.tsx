import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Bookspages.scss';

function Bookspages(props: any) {


  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState();
  const [indexValue, setIndexValue] = useState(1);
  const [chapterIndex, updateChapterIndex] = useState(1);


  useEffect(() => {
    if (props.selectedBookData) {
      fetchData().then((res) => {
        setIndexValue(1);
        setSlides(res);
      });
    }
  }, [props.selectedBookData]);

  const fetchData = async () => {

    const response1 = await axios.get(`http://18.177.140.79:8080/chapters/${props.selectedBookData}/`);
    setCurrentSlide(response1.data.pages[0]);
    return response1.data.pages;
  }



  const arrowRightClick = () => {

    if (slides.length == indexValue) {
      updateChapterIndex(chapterIndex + 1)
      props.onNameChange(chapterIndex);
      return;
    }

    setIndexValue(indexValue + 1);
    setCurrentSlide(slides[indexValue]);
  }

  const arrowLeftClick = () => {

    if (indexValue >= 1) {


      setIndexValue(indexValue - 1);
      setCurrentSlide(slides[indexValue]);
    }
  }

  return (
    <div className="App">
      <div className="carousel-block">
        <div className="flex-container">
          <div id="slider">
            <div className="slide">
              {slides.length && currentSlide != undefined && <img src={currentSlide['image']['file']} alt='test' className="slider-img" useMap="#gfg_map" />}
              <map name="gfg_map">
                <area shape="rect" coords="0,0, 250,500" alt="GFG1"
                  onClick={arrowRightClick} />
                <area shape="rect" coords="250,0, 500,500" alt="GFG4"
                  onClick={arrowLeftClick} />
              </map>
            </div>

          </div>
        </div>
      </div>
      {slides.length > 0 &&
        <div> {indexValue}/  {slides.length}</div>
      }
    </div>

  );
}

export default Bookspages;
