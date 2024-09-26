import { ProjectContainer } from '../ProjectContainer/ProjectContainer';
import './SlideShow.css';
import React, { useState, useEffect } from 'react';

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [slides, setSlides] = useState([
    {
      number: 1,
      image: 'hapi.png',
      caption: 'H-API',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec sapien vel leo pulvinar hendrerit.', // Add project info
    },
    {
      number: 2,
      image: 'portfolio.png',
      caption: 'Portfolio',
      info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', // Add project info
    },
  ]);
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentPopupInfo, setCurrentPopupInfo] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://hapi-sfpz.onrender.com/api/projects");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3700); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, [slides]);

  const handlePrevClick = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleDotClick = (index) => {
    setSlideIndex(index);
  };

  const handleTextClick = (info) => {
    info ? setCurrentPopupInfo(JSON.stringify(info)) : setCurrentPopupInfo(null);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="slideshow-container" id='Projects'>
      {slides.map((slide, index) => (
        <div
          key={slide.number}
          className={`mySlides fade ${index === slideIndex ? 'active' : ''}`}
        >
          <div className="numbertext">{slide.number} / {slides.length}</div>
          <img src={slide.image} alt={slide.caption} style={{ width: '100%' }} />
          <div className="text" onClick={() => handleTextClick(data[slide.number - 1])}>
            {slide.caption}
            <img src='open_in_new.png' alt='open in new' />
          </div>
        </div>
      ))}

      <button className="prev" onClick={handlePrevClick}>❮</button>
      <button className="next" onClick={handleNextClick}>❯</button>

      <div className='dots-container' style={{ textAlign: 'center' }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index + 1)}
          ></span>
        ))}
      </div>

      {showPopup && (
        <div className="popup" >
          {
            JSON.parse(currentPopupInfo) ? (
              <ProjectContainer content={JSON.parse(currentPopupInfo)}/>
            ) : (
              <div className='no-info'>
                  No info for now
              </div>
            )
          }
            
          {/* <p>{currentPopupInfo}</p> */}
          <button className='popup-close' onClick={handlePopupClose}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Slideshow;