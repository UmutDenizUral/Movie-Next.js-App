
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white text-2xl font-bold">UDU Film</a>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Anasayfa</a>
                <a href="/izlemelistem" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">İzleme Listem</a>
                <a href="/filmler" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Filmler</a>
                <a href="/diziler" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Diziler</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Giriş Yap</a>
              <a href="/signup" className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium">Üye Ol</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button className="bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md inline-flex items-center justify-center">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
