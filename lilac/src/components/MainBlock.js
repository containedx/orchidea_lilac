
import './MainBlock.css';
import logo from '../assets/cat_pixel.png';
import avatar from '../assets/my_pixel_avatar.png';
import avatar2 from '../assets/my_pixel_avatar2.png';
import React, { useState } from 'react';

export default function MainBlock() {

    const [hovered, setHovered] = useState(false);

    return (
        <div className="main-cloud">

            <p className="title"> kinga zawarty </p>

            <img src={hovered ? avatar2 : avatar} className="avatar"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)} />
            <img src={logo} className="App-logo" alt="logo" /> <br></br>


            <a href="https://containedx.itch.io/interactive-resume" target="_blank">my interactive resume</a> <br></br>
            <a href="https://www.linkedin.com/in/kinga-zawarty/" target="_blank">linkedin</a> <br></br>
            <a href="https://github.com/containedx" target="_blank">github</a> <br></br>

        </div>
    );

}