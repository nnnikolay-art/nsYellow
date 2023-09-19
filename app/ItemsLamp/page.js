import React from 'react'
import lamp from '../../public/lamp.jpg'
import pdf from '../../public/pdf.png'

import Image from 'next/image';
import Link from 'next/link';

import tIcon from '../../public/telegram.png'
import wIcon from '../../public/whatsapp.png'

const ProductCard = ({ product }) => {
  
  const data = {
    char:[
        {
            name: 'Длина волны, нм',
            value: '465+15',

        },
        {
          name: 'Интенсивность излучения',
          value: '600–1600 мкВт/см2',

        },
        {
          name: 'Длительность сеанса фототерапии',
          value: 'до 99 ч 59 мин',

        },
        {
          name: 'Питание от сети переменного тока',
          value: '220 В/50 Гц',

        },
        {
          name: 'Ресурс работы',
          value: 'до 50 000 ч',

        },
        {
          name: 'Количество светодиодов',
          value: '60 шт.',

        },
        {
          name: 'Габаритные размеры, мм',
          value: '675×350×155',

        }

      ]}

  return (
    <div className="container max-w-fit  rounded overflow-hidden shadow-lg mb-6 py-6 px-10">
      <div className='flex justify-center'>
        <Image className="" src={lamp} alt='n'  />

      </div>
      <div className="px-6 py-4 ">
      <span className="text-xl inline-block bg-gray-300 rounded-full px-5 py-4 text-sm font-bold text-gray-700 mr-2 text-center ml-14 flex justify-center">
          Цена аренды:<br></br>
          1 100 рублей за месяц
        </span>
      </div>
      

      <div className="px-1 py-1">

      </div>


      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">УФ лампа для лечения желтушки новорожденных ОФТН-03 “Аксион”</div>
        <p className="text-gray-700 text-base">УФ лампа Аксион для лечения желтушки новорожденных применяется в фототерапии с излучением синего цвета и длиной волны 460–490 нм. Она обеспечивает мощный терапевтический эффект при лечении желтухи у младепнцев. Неонатальная желтуха встречается в основном у недоношенных детей, и основными клиническими проявлениями являются желтые пятна на склере, коже и слизистых оболочках младенцев. Однако, симптомы безболезненны, поэтому бывают незаметны для родителей

Облучатель фототерапевтический для лечения желтухи новорожденных ОФТН-03-«Аксион» предназначен для сеанса фототерапии новорожденному посредством облучения светом синего цвета в спектре волн длиной (465±15) нм с целью снижения общего содержания билиру-бина в крови.
Облучатель фототерапевтический для лечения желтухи новорожденных ОФТН-03-«Аксион» эффективно используется в родильных домах, в отделениях интенсивной терапии новорожденных, в детских амбулаторных учреждениях для лечения неонатальной желтухи.
Эффективная фототерапия при помощи УФ ламп снижает уровень непрямого билирубина на 1-2 мг каждые 24 часа.

Фотолампа Аксион ОФТН-03 представляет собой ванночку из пластика, по периметру которой размещены световые излучатели. Младенец укладывается в съемный гамак над излучателями. Режим освещения задается при помощи регуляторов интенсивности и времени.</p>
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Характеристики товара:</h3>
          <ul className="text-gray-700">
            {data.char.map((char, index) => (
              <li key={index} className="mb-1">
                <span className="font-semibold">{char.name}:</span> {char.value}
              </li>
            ))}
          </ul>
        </div>

      </div>

      
      <div className='px-6 py-4' >
      <b className=''>Документация и сертификаты:</b>
        <div className=''>
        
        <Link href="https://massa.ru/upload/iblock/a83/20zx9eqlca4fbljt68asm92ctcidq2v0/V1_15K_Sasha_21_3_2021.pdf">
           <Image src={pdf} height="20" width="20" className='float-left flex-' />
            Руководство по эксплуатации
        </Link>
        </div>
        <div className=''>
          <Link href="files/sr-vem.pdf">
          <Image src={pdf} height="20" width="20" className='float-left flex-' />
            Регистрационное удостоверение на медицинское изделие 2022 г
          </Link>
        </div>
        <span className="text-xl inline-block bg-gray-300 rounded-full px-1 py-1  font-bold text-gray-700 mr-2 text-center ml-14 flex justify-center columns-3">
          <Image src={tIcon} height="50" width="50" className='float-left flex-' />
          <Image src={wIcon} height="50" width="50" className='float-left flex-' />
          Позвонить <br></br>
          +7 951 191-11-11
        </span>


      </div>
    </div>
  );
};

export default ProductCard;

