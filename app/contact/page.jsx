import React from 'react';
import { FiPhone, FiMapPin, FiMail, FiMessageCircle } from 'react-icons/fi';
import bbg from '../../public/bg.jpg'
import Image from 'next/image';


const Contact = () => {
  return (


        <div className="flex flex-col items-center  min-h-screen bg-gray-200 ">
          


          <div className="max-w-md w-max py-5 p-2 bg-white rounded-lg shadow-md mt-5">
            <h2 className="text-2xl font-bold mb-4">Контакты</h2>
            <div className="mb-4 flex items-center">
              <FiMapPin className="mr-2" size={20} />
              <div>
                <h3 className="text-lg font-semibold mb-2">Адрес:</h3>
                <p>Адрес: Удмуртская республика, г. Ижевск, ул. Ломоносова 9а</p>
              </div>
            </div>
            <div className="mb-1 flex items-center">
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
 

  );
};

export default Contact;
