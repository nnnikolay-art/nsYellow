"use client"

import React from 'react';
import Image from 'next/image'
import Logo from '../public/Logo.jpg'
import bbg from '../public/bg.jpg'
import aist from '../public/aist.png'
import t1 from '../public/t1.png'
import t2 from '../public/t2.png'

import t3 from '../public/t3.png'
import t4 from '../public/t4.png'

import vesi from '../public/vesi.jpg'
import lamp from '../public/lamp.jpg'

import devidor from '../public/Divider.png'
import devidor2 from '../public/Divider2.png'
import Link from 'next/link';


import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const HomePage = () => {
  return (
      <div className='container mx-auto max-w-screen-lg '>




      <div className='bg-white px-2'>
        <div className=" flex flex-col  bg-white items-center justify-center">
          <Image src={devidor2} alt="div" className='w-fit object-cover  '></Image>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-center items-center justify-center mx-1">Добро пожаловать!</h1>
  

        <p className="text-lg text-gray-700 mb-6">
          Рады видеть Вас на нашем сайте.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          У нас вы можете преобрести товары для детского здоровья: УФ-Лампы, весы и другие важные товары.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Специальные лампы обладают уф-излучением, которое помогает снижать уровень билирубина в крови, улучшая здоровье малыша.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Наши товары отвечают медицинским стандартам и безопасности детей.
        </p>
        <p className="text-lg text-gray-700">
          Здоровье вашего ребенка - наш приоритет!
        </p>
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
        
        <div className='text-center columns-2 justify-center items-center flex gap-8 text-2xl'>
          <div className='text-lg'>
            
            <b>Весы</b>
            <p>Для новорожденных</p>
            <Link href="/Items">
              <Image src={vesi} alt="Весы" className=' bg-cyan-200  rounded-full hover:border-pink-400 hover:border  hover:border-4  transition ease-linear delay-100  duration-300' width="300" height="300"></Image>

            </Link>
          </div>
          <div  className='text-lg'>
          
            <b>УФ-Лампа</b>
            <p>Для лечения желтухи у новорожденных</p>
            <Link href="/ItemsLamp">
               <Image src={lamp} alt="Лампа" className=' bg-cyan-200  rounded-full hover:border-pink-400 hover:border  hover:border-4  transition ease-linear delay-100  duration-300' width="300" height="300" ></Image>

            </Link>
          </div>
        </div>

        <div className=" flex flex-col  bg-white items-center justify-center">
          <Image src={devidor} alt="div" className='w-fit object-cover  '></Image>
         
        </div>
        <div className='columns-4 mx-auto items-center justify-center'>
          
          <Image src={t1} alt="toy1" className='object-cover transition ease-linear delay-100 bg-white blur-none hover:-translate-y-1 hover:scale-110 hover:blur-sm hover:bg-blue-300 duration-300'></Image>
          <Image src={t2} alt="toy2" className='object-cover transition ease-linear delay-100 bg-white blur-none hover:-translate-y-1 hover:scale-110 hover:blur-sm hover:bg-yellow-300 duration-300'></Image>
          <Image src={t3} alt="toy3" className='object-cover transition ease-linear delay-100 bg-white blur-none hover:-translate-y-1 hover:scale-110 hover:blur-sm hover:bg-green-300 duration-300'></Image>
          <Image src={t4} alt="toy4" className='object-cover transition ease-linear delay-100 bg-white blur-none hover:-translate-y-1 hover:scale-110 hover:blur-sm hover:bg-orange-200 duration-300'></Image>
        </div>

        
      </div>
      </div>
  );
};

export default HomePage;