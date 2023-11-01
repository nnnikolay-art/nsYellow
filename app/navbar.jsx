"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/Logo_w_trans.png'
import { useSpring, animated, useTrail } from '@react-spring/web';
import Bg2 from "../public/Photokako-vignette-ff43XkKApuykhnHO.jpg"

const Navbar = () => {
    const [isVisible, setIsVisible] = React.useState(false);


    const props = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 1000 },
      });
    

    



    const links = [
    {caption:'Главная', link:"/"}, 
    {caption:'Прокат', link:"/ItemsSelect"}, 
    {caption:'Контакты', link:"/contact"},
    {caption:'Статьи', link:"/contact"}];

    const trail = useTrail(links.length, {
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
            config: { tension: 200, friction: 10 },
            delay: 700,
          });

     
      React.useEffect(() => {
        setIsVisible(true);
      }, []);

    return (
        <div className="container relative items-center justify-center flex mx-auto">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="">
                    <animated.div style={props} className="logo-animation">
                    <Image src={logo} className='left-0'></Image>
                    </animated.div >

                    <div className='mx-auto justify-center items-center flex'>
                    {trail.map((props, index) => (
                    <animated.button key={index} style={props} className="inline-flex ml-1">
                         <Link href={links[index].link} className={"bg-gradient-to-r from-white from-5% via-blue-200 via-30% to-white to-95% text-black text-sm hover:text-blue-800 hover:scale-105 transition  border border-spacing-2 border-separate border-blue-900 border-gray-7 ease-in-out duration-75 px-3 py-2 rounded-md  font-medium"}>
                                {links[index].caption}
                            </Link>
                        
                    </animated.button>
                    
      ))}
      </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;