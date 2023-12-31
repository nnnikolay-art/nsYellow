"use client"

import React from 'react';
import Image from 'next/image'
import Logo from '../public/Logo.jpg'
import bbg from '../public/bg.jpg'
import aist from '../public/aist2.jpg'
import t1 from '../public/t1.png'
import t2 from '../public/t2.png'

import t3 from '../public/t3.png'
import t4 from '../public/t4.png'

import vesi from '../public/vesi.jpg'
import lamp from '../public/lamp.jpg'

import devidor from '../public/Divider2_w_trans.png'
import devidor2 from '../public/Divider2_w_trans.png'
import Link from 'next/link';


import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Parallax from './components/paralax';

import aistBg from "../public/aistBg2.png"

import standard from "../public/Standart.png"
import health from "../public/Family.png"

const HomePage = () => {

  

  return (
    <div>

      <div className='container mx-auto max-w-screen-lg '>
       





      
      <div className='ml-6 '>
        <div className=" flex flex-col items-center justify-center z-10">
          <Image src={devidor2} alt="div" className='w-fit object-cover  '></Image>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-center items-center justify-center mx-">Добро пожаловать!</h1>
        <Image src={aistBg} alt="bg"  className='mx-auto'>
       
        </Image>
        <div>

      
        <p className="text-lg text-gray-700 mb-6">
          Рады видеть Вас на нашем сайте.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          У нас вы можете преобрести товары для детского здоровья: УФ-Лампы, весы и другие важные товары.
        </p>

        <div className='list-disc'>  
          <div className='flex'>
          <Image src={health} alt="health" width="100" height="50" className='w-32 h-32'/>
          <span className="text-lg text-gray-700 mb-6 text-lg text-gray-700 mb-6  bg-gradient-to-r from-blue-200 from-1%  to-white via-100%  ">
            Специальные лампы обладают уф-излучением, которое помогает снижать уровень билирубина в крови, улучшая здоровье малыша.
          </span>
          </div>
        </div>

        <div className='list-disc'>  
          <div className='flex'>
          <Image src={standard} alt="health" width="100" height="50" className='w-32 h-32'/>
          <span className="text-lg text-gray-700 mb-6  bg-gradient-to-r from-blue-200 from-1%  to-white via-100% ">
              Наши товары отвечают медицинским стандартам и безопасности детей.Здоровье вашего ребенка - наш приоритет!
          </span>
          </div>
        </div>


  
        <br></br>
        <p className="text-lg text-gray-950">
         
          Предоставляем услуги проката в городах РФ:<br></br>
          Москва, Санкт-Петербург, Архангельск, Белгород, Брянск, Воронеж, 
          Екатеринбург, Иваново, Омск, Оренбург, Пенза,  Ижевск, Иркутск, Казань, Калининград, Красноярск, 
          Липецк, Мурманск, Нижнем Новгород,  Тюмень, Ульяновск, Уфа, Челябинск
          Пермь, Ростов-на-Дону, Саратов, Сургут, Самара. 
         
        </p>
        <br></br>
        <p className="text-2xl font-bold text-gray-950">
          Выберете интересующий товар:
        </p>
        </div>
        
        <div className='text-center columns-2 justify-center items-center flex gap-8 text-2xl  mt-5'>
          <div className='text-lg'>
            
            <b>Весы</b>
            <p>Для новорожденных</p>
            <Link href="/Items">
              <Image src={vesi} alt="Весы" className='bg-white shadow-lg rounded-lg p-1 flex flex-col items-center transition-all duration-200 hover:scale-105' width="300" height="300"></Image>
              <div className='text-lg rounded-xl border-blue-800 bg-blue-200'>Открыть</div>
            </Link>
          </div>
          <div  className='text-lg'>
          
            <b>УФ-Лампа</b>
            <p>Для лечения желтухи у новорожденных</p>
            <Link href="/ItemsLamp">
               <Image src={lamp} alt="Лампа" className='bg-white shadow-lg rounded-lg p-1 flex flex-col items-center transition-all duration-200 hover:scale-105' width="300" height="300" ></Image>
               <div className='text-lg rounded-xl border-blue-800 bg-blue-200'>Открыть</div>

            </Link>
          </div>
        </div>

        <div className=" flex flex-col  bg-white items-center justify-center">
          <Image src={devidor} alt="div" className='w-fit object-cover  '></Image>
         


        
      </div>
      </div>
      </div>
      </div>
  );
};

export default HomePage;