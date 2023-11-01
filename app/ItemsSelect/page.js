"use client"
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

import vesi from '../../public/vesi.jpg'
import lamp from '../../public/lamp.jpg'
import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Весы',
    image: '/vesi.jpg',
    link: '/Items'
  },
  {
    id: 2,
    name: 'Лампа',
    image: '/lamp.jpg',
    link: '/ItemsLamp'
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
    <div>
    <div className='text-center font-bold mt-5'>Выберете интересующую услугу:</div>
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
            <Link href={product.link}>
            <Image 
              src= {product.image}
              alt={product.name}
              width="250"
              height="250"
              className="border-0 hover:border-gray-500  hover:border-2 rounded-lg"
            />
            <h2 className="mt-4 text-lg font-bold text-center">{product.name}</h2>
            </Link>
          </animated.div>
        ))}
      </div>
    </div>
    </div>
  );
}