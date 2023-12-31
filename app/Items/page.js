import React from 'react'
import vesi from '../../public/vesi.jpg'
import pdf from '../../public/pdf.png'

import Image from 'next/image';
import Link from 'next/link';

import tIcon from '../../public/telegram.png'
import wIcon from '../../public/whatsapp.png'

const ProductCard = () => {
  
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
          name: 'Тип дисплея',
          value: 'жидкокристаллический',

        },
        {
          name: 'Источник питания',
          value: 'Аккумулятор, сеть 220 Вт.',

        }
      ]}

  return (
    <div className="container max-w-fit  rounded overflow-hidden shadow-lg mb-6 py-6 px-10">
      <div className='flex justify-center'>
        <Image className="rounded-lg" src={vesi} alt='Весы'  />

      </div>
      <div className="px-6 py-4 ">
      <span className="text-xl bg-gradient-to-r from-white from-10% via-blue-200 via-30% to-white to-90% ... rounded-full py-4 font-bold text-gray-700 text-center flex sm:w-1/2 mx-auto justify-center">
          Цена аренды:<br></br>
          1 090 рублей за месяц
        </span>
      </div>
      

      <div className="px-1 py-1">

      </div>


      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">Весы детские &lsquo;Саша&lsquo;</div>
        <p className="text-gray-700 text-base">Весы используются для взвешивания новорожденных и грудных детей как в детских медицинских учреждениях, 
        так и в домашних условиях. Весы зарегистрированы как медицинское изделие и имеют регистрационное удостоверение Федеральной службы по надзору
         в сфере здравоохранения № РЗН 2013/1197 от 09.04.2018 г. &apos;
         Весы просты в эксплуатации, они помогут осуществлять постоянный контроль за прибавкой веса ребенка в первые годы его жизни. 
         Яркая подсветка ЖК-дисплея позволяет производить взвешивание во время ночных кормлений младенца. Встроенный аккумулятор обеспечивает автономную работу весов до 94 часов. 
         Допускается санобработка весов (дезинфекция и облучение кварцем).</p>
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
           <Image src={pdf} height="20" width="20" className='float-left flex-' alt='pdfIcon'  />
            Руководство по эксплуатации
        </Link>
        </div>
        <div className=''>
          <Link href="files/sr-vem.pdf">
          <Image src={pdf} height="20" width="20" className='float-left flex-' alt='pdfIcon' />
            Регистрационное удостоверение на медицинское изделие 2022 г
          </Link>
        </div>
        <span className=" inline-block bg-blue-200 rounded-full px-1 py-1 text-lg  font-bold text-gray-700  text-center  flex justify-center columns-3">
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

