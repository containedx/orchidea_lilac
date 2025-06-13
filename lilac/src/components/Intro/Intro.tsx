import React, { useEffect } from 'react';
import './Intro.css';
import MainBlock from "../MainBlock/MainBlock";
import SubpageBase from '../Subpages/SubpageBase';
import SpotifyPlaylist from '../Spotify/SpotifyPlaylist';

const Intro: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector('.container')!;
    container.classList.remove('loaded');
    container.getBoundingClientRect();

    setTimeout(() => {
      container.classList.add('loaded');
    }, 500);
  }, []);

  return (
    <div className="container">

      


      <div className="content">
        <div className="side-left">
          <SubpageBase offset={-30}  />
          <SubpageBase offset={100}  />
          <SubpageBase offset={20}  />
        </div>

        <div className="mainHeader"> 
          {"KINGA".split("").map((char, index) => (
          <span key={`k-${index}`} className="letter">{char}</span>
          ))}
          <br />
          {"ZAWARTY".split("").map((char, index) => (
          <span key={`z-${index}`} className="letter">{char}</span>
          ))}
          <MainBlock />
          <SpotifyPlaylist />
        </div>
        

        <div className="side-right">
          <SubpageBase offset={-30} />
          <SubpageBase offset={-140} />
          <SubpageBase offset={0} />
        </div>
      </div>

      <div className="image image1"></div>
      <div className="image image2"></div>
    </div>
  );
};

export default Intro;
