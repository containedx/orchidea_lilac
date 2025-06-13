import React, { useEffect, useRef, useState  } from 'react';
import './SubpageBase.css';
import { Link } from 'react-router-dom';

import cloud1 from '../../assets/cloud.png';
import cloud1Hover from '../../assets/cloud_hover.png';
import cloud2 from '../../assets/cloud2.png';
import cloud2Hover from '../../assets/cloud2_hover.png';
import cloud3 from '../../assets/cloud3.png';
import cloud3Hover from '../../assets/cloud3_hover.png';

const clouds = [
    { normal: cloud1, hover: cloud1Hover },
    { normal: cloud2, hover: cloud2Hover },
    { normal: cloud3, hover: cloud3Hover },
];

type Props = {
    offset: number;
    subpageLink?: string;
    title?: string;
    cloudIndex?: number;
  };


export default function SubpageBase( { offset, subpageLink = "/Programming", title = "SubpageLink", cloudIndex = 0}: Props ) {

    const ref = useRef<HTMLAnchorElement>(null);
    const cloud = clouds[cloudIndex];
    const [isHovered, setIsHovered] = useState(false);

  // Random phase offsets generated once
  const randomX = React.useMemo(() => Math.random() * 2 * Math.PI, []);
  const randomY = React.useMemo(() => Math.random() * 2 * Math.PI, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let animationFrameId: number;

    const animate = (time: number) => {
      const elapsed = time / 1000; // convert ms to seconds
      const x = 5 * Math.sin(elapsed * 2 + randomX);
      const y = 5 * Math.cos(elapsed * 1.5 + randomY);
      el.style.transform = `translate(${x + offset}px, ${y}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [randomX, randomY, offset]);


    return (
     <div> 
        <Link to={subpageLink} className="subpage-background" ref={ref} 
        style={{
            backgroundImage: `url(${isHovered ? cloud.hover : cloud.normal})`
          
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <span>{title}</span>
        </Link>
    </div>  
    );
}