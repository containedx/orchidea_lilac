
import './MainBlock.css';
import cat from '../../assets/cat_pixel.png';
import avatar from '../../assets/my_pixel_avatar.png';
import avatar2 from '../../assets/my_pixel_avatar2.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function MainBlock() {

    const [hovered, setHovered] = useState(false);

    return (
        <div className="main-cloud">

            <p className="title"> kinga zawarty </p>

            <div>
                <img src={hovered ? avatar2 : avatar} className="avatar"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} />
                <img src={cat} className="cat" /> <br></br>
            </div>

            <div className="links">
                <a href="https://containedx.itch.io/interactive-resume" target="_blank">my interactive resume</a>
                <a href="https://www.linkedin.com/in/kinga-zawarty/" target="_blank">linkedin</a>
                <a href="https://github.com/containedx" target="_blank">github</a>
            </div>

        </div>
    );

}