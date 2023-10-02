"use client"
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

import vesi from '../../public/vesi.jpg'
import lamp from '../../public/lamp.jpg'
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Весы',
    image: '../../public/vesi.jpg',
  },
  {
    id: 2,
    name: 'Лампа',
    image: '../../public/lamp.jpg',
  },
];

export default function Home() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(200px)' },
  });

  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="grid grid-cols-2 gap-8">
        {products.map((product) => (
          <animated.div
            key={product.id}
            className={`p-8 cursor-pointer border ${
              selectedProductId === product.id && 'border-blue-500'
            }`}
            style={fadeIn}
            onClick={() => handleProductSelect(product.id)}
          >
            <Image
              src={product.image.vesi}
              alt={product.name}
              width="100"
              height="100"
              className="w-full object-cover"
            />
            <h2 className="mt-4 text-lg font-bold">{product.name}</h2>
          </animated.div>
        ))}
      </div>
    </div>
  );
}