import React from 'react';
import { FiPhone, FiMapPin, FiMail, FiMessageCircle } from 'react-icons/fi';
import bbg from '../../public/bg.jpg'
import Image from 'next/image';


const Contact = () => {
  return (


        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
          <div className="absolute inset-0">
          <Image
              src={bbg}
              alt='Логотип'
              className='sm:blur-none'
              h-full
              fill/>
          </div>
          <div  className="relative z-10 ">

          <div className="max-w-md w-full p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Контакты</h2>
            <div className="mb-4 flex items-center">
              <FiMapPin className="mr-2" size={20} />
              <div>
                <h3 className="text-lg font-semibold mb-2">Адрес:</h3>
                <p>Адрес: Удмуртская республика, г. Ижевск, ул. Ломоносова 9а</p>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <FiPhone className="mr-2" size={20} />
              <div>
                <h3 className="text-lg font-semibold mb-2">Телефон:</h3>
                <p>+7 951 191-11-11</p>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <FiMail className="mr-2" size={20} />
              <div>
                <h3 className="text-lg font-semibold mb-2">Электронная почта:</h3>
                <p>medprokat18@mail.ru</p>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <FiMessageCircle className="mr-2" size={20} />
              <div>
                <h3 className="text-lg font-semibold mb-2">Мессенджеры:</h3>
                <p>WhatsApp: +7 951 191-11-11</p>
                <p>Telegram:+7 951 191-11-11</p>
              </div>
            </div>
          </div>
        </div>
        </div>

  );
};

export default Contact;
