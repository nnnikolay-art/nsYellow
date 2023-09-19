import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
    return (
        <div className="bg-blue-400  relative z-10 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="ml-4 flex items-center">
                            <Link href="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                               Главная
                            </Link>
                            <Link href="/contact" className="text-white hover:text-gray-30 px-3 py-2 rounded-md text-sm font-medium">
                                Контакты
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;