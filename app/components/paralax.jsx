import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const ParallaxBackground = ({ imageUrl }) => {
  const [scrollY, setScrollY] = useState(0);
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  set({ y: scrollY * 0.5 });

  return (
    <animated.div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        transform: y.to(value => `translateY(${value}px)`),
      }}
    />
  );
};

export default ParallaxBackground;