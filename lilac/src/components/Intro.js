import React, { useEffect } from 'react';
import './Intro.css';
import MainBlock from "./MainBlock";


function Intro() {
  useEffect(() => {
    const container = document.querySelector('.container');
    container.classList.remove('loaded');
    container.getBoundingClientRect();
    //container.classList.add('loaded');

    setTimeout(() => {
      container.classList.add('loaded');
    }, 3000);
  }, []);

  return (
    <div className="container">
        <MainBlock />
      <div className="image image1"></div>
      <div className="image image2"></div>
    </div>
  );
}

export default Intro;
