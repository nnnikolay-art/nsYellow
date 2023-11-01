import React from 'react'
import lamp from '../../public/lamp.jpg'
import pdf from '../../public/pdf.png'

import Image from 'next/image';
import Link from 'next/link';

import tIcon from '../../public/telegram.png'
import wIcon from '../../public/whatsapp.png'

const ProductCard = () => {
  
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
        <Image className="rounded-lg" src={lamp} alt='Лампа'  />
      </div>
    <div className="px-6 py-4 ">

      <span className="text-xl bg-gradient-to-r from-white from-10% via-blue-200 via-30% to-white to-90% ... rounded-full py-4 font-bold text-gray-700 text-center flex sm:w-1/2 mx-auto justify-center">
          Цена аренды:<br></br>
          590 рублей в сутки
        </span>
    </div>
      

      <div className="px-1 py-1"></div>


      <div className="px-12 py-2">
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

      
      <div className='px-12 py-4' >
      <b className=''>Документация и сертификаты:</b>
        <div className=''>
        
        <Link href="files/OFTN_Manual.pdf">
           <Image src={pdf} height="20" width="20" className='float-left flex-' alt='pdf'   />
            Руководство по эксплуатации лампы Аксион ОФТН-3
        </Link>
        <br></br>
        <Link href="files/oftn-03-sert.jpg">
           <Image src={pdf} height="20" width="20" className='float-left flex-' alt='pdf'   />
            Сертификат УФ-Лампы Аксион ОФТН-03
        </Link>
        </div>
       
        <span className="bg-blue-200 rounded-full px-1 py-1 text-lg  font-bold text-gray-700  text-center  flex sm:w-1/2 mx-auto justify-center columns-3">
         <Image src={tIcon} height="25" width="40" className='float-left flex-' alt='telegramIcon' />
         <Image src={wIcon} height="25" width="40" className='float-left flex-' alt='watsuppIcon'  />
          Позвонить <br></br>
          +7 951 191-11-11
        </span>


      </div>
    </div>
  );
};

export default ProductCard;

