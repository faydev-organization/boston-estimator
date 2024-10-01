'use client';

import { useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black lg:bg-transparent lg:bg-opacity-30 lg:backdrop-blur-lg p-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="/" className="text-white text-2xl font-bold">
            logo
          </a>
        </div>
        <div className="block lg:hidden">
          <IconButton
            onClick={toggleMenu}
            className="text-black focus:outline-none focus:bg-gray-700"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-md lg:flex-grow flex items-center justify-center w-full">
            <a
              href="/beranda"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mx-4"
            >
              Beranda
            </a>
            <a
              href="/tentangkami"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mx-4"
            >
              Tentang Kami
            </a>
            <a
              href="/paket"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mx-4"
            >
              Paket
            </a>
            <a
              href="/hubungikami"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mx-4"
            >
              Hubungi Kami
            </a>
            <button className="bg-orange-400 rounded-lg py-1">
              <a
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mx-4"
              >
                Aplikasi RAB
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 w-full text-center bg-white bg-opacity-70 backdrop-blur-lg p-4 rounded-lg">
          <a
            href="/beranda"
            className="block mt-2 text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Beranda
          </a>
          <a
            href="/tentangkami"
            className="block mt-2 text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Tentang Kami
          </a>
          <a
            href="/paket"
            className="block mt-2 text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Paket
          </a>
          <a
            href="/hubungikami"
            className="block mt-2 text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Hubungi Kami
          </a>
          <a
            href="/"
            className="block mt-2 text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Aplikasi RAB
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
