import React, { useEffect } from 'react';
import './Intro.css';
import MainBlock from "../MainBlock/MainBlock";
import SubpageBase from '../Subpages/SubpageBase';


function Intro() {
  useEffect(() => {
    const container = document.querySelector('.container');
    container.classList.remove('loaded');
    container.getBoundingClientRect();
    //container.classList.add('loaded');

    setTimeout(() => {
      container.classList.add('loaded');
    }, 500);
  }, []);

  return (
  
    <div className="container">
      <SubpageBase/>

        <MainBlock />
      <div className="image image1"></div>
      <div className="image image2"></div>
    </div>
  );
}

export default Intro;
