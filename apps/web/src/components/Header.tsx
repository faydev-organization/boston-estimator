'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'; // Import router for navigation
import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'js-cookie'; // Import js-cookie for cookie handling

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Explicitly type the ref
  const router = useRouter(); // Initialize router

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Check if the user is logged in by checking the auth token cookie
    const token = Cookies.get('LOGIN_INFO');
    setIsLoggedIn(!!token);
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const clearAllCookies = () => {
    const allCookies = Cookies.get();
    for (const cookieName in allCookies) {
      Cookies.remove(cookieName);
    }
  };

  const handleLogout = () => {
    clearAllCookies(); // Clear all cookies
    setIsLoggedIn(false); // Update state
    router.push('/'); // Redirect to home page
  };

  return (
    <nav className="bg-white border-b-2 shadow-sm h-full">
      <div className="mx-10 px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png" // Replace with the actual logo path
            alt="Estimator.ID Logo"
            width={40}
            height={40}
          />
          <span className="ml-2 text-lg font-bold text-black">LOGO</span>
        </div>

        {/* Central Navigation and Buttons */}
        <div className="ml-auto flex space-x-8 items-center">
          {/* Menu Items */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="#"
              className="text-gray-700 hover:text-green-500 font-medium"
            >
              Koleksi
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-green-500 font-medium"
            >
              Paket
            </Link>

            {/* Fitur with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="text-gray-700 hover:text-green-500 font-medium focus:outline-none"
                onClick={handleDropdownToggle}
              >
                Fitur
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Estimator
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Suplier
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#"
              className="text-gray-700 hover:text-green-500 font-medium"
            >
              Tutorial
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 items-center">
            {' '}
            <Link
              href="#"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium"
            >
              Mulai Proyek
            </Link>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium"
              >
                Keluar
              </button>
            ) : (
              <Link
                href="/auth/login"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium"
              >
                Masuk
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
