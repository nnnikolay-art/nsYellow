import React from 'react'
import vesi from '../../public/vesi.jpg'
import pdf from '../../public/pdf.png'

import Image from 'next/image';
import Link from 'next/link';

import tIcon from '../../public/telegram.png'
import wIcon from '../../public/whatsapp.png'

const ProductCard = ({ product }) => {
  
  const data = {
    char:[
        {
            name: 'Габаритные размеры весов (ШхГхВ), мм',
            value: '540x330x105',

        },
        {
          name: 'Размер весовой платформы (ШхГ), мм',
          value: '540x290',

        },
        {
          name: 'Тип дисплея:',
          value: 'жидкокристаллический',

        },
        {
          name: 'Источник питания:',
          value: 'Аккумулятор, сеть 220 Вт.',

        }
      ]}

  return (
    <div className="container max-w-fit  rounded overflow-hidden shadow-lg mb-6 py-6 px-10">
      <div className='flex justify-center'>
        <Image className="" src={vesi} alt='n'  />

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
        <div className="font-bold text-xl mb-2">Весы детские "Саша"</div>
        <p className="text-gray-700 text-base">Весы используются для взвешивания новорожденных и грудных детей как в детских медицинских учреждениях, так и в домашних условиях. Весы зарегистрированы как медицинское изделие и имеют регистрационное удостоверение Федеральной службы по надзору в сфере здравоохранения № РЗН 2013/1197 от 09.04.2018 г. Весы просты в эксплуатации, они помогут осуществлять постоянный контроль за прибавкой веса ребенка в первые годы его жизни. Яркая подсветка ЖК-дисплея позволяет производить взвешивание во время ночных кормлений младенца. Встроенный аккумулятор обеспечивает автономную работу весов до 94 часов. Допускается санобработка весов (дезинфекция и облучение кварцем).</p>
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

