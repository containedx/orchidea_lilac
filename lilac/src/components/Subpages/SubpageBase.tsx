import React, { useEffect, useRef } from 'react';
import './SubpageBase.css';
import { Link } from 'react-router-dom';


export default function SubpageBase() {
    const ref = useRef<HTMLAnchorElement>(null);

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
      el.style.transform = `translate(${x}px, ${y}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [randomX, randomY]);


    return (
     <div> 
        <Link to="/Programming" className="subpage-background" ref={ref}>
            <span>subpage link</span>
        </Link>
    </div>  
    );
}