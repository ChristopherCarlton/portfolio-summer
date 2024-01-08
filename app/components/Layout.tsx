// components/Layout.tsx

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-[#F4F5F7] min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-8 bg-[#ffffff] shadow-md">
        <div className="text-[#1E40AF] font-semibold text-xl"><Link href="/">Summer Vu</Link></div>
        <nav>
          <ul className="flex space-x-6 font-medium">
            <li className="hover:text-[#1E40AF] text-black transition-colors duration-300">
            <Link href="/SummerVu">ABOUT ME</Link>
            </li>
            <li className="hover:text-[#1E40AF] text-black transition-colors duration-300">
              <Link href="/Resume">RESUME</Link>
            </li>
            <li className="hover:text-[#1E40AF] text-black transition-colors duration-300">
              <Link href="/Classes">CLASSES</Link>
            </li>
            <li className="hover:text-[#1E40AF] text-black transition-colors duration-300">
              <Link href="/Projects">PROJECTS</Link>
            </li>
            <li className="hover:text-[#1E40AF] text-black transition-colors duration-300">
              <Link href="/Contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      {/* Content */}
      <main className="flex flex-1">
        <div className="w-full lg:w-1/3 xl:w-1/4 p-12 flex flex-col items-center bg-[#3d83a4]">
          <img
            src="/images/summer.png"
            alt="Summer Vu portrait"
            className="w-48 h-48 rounded-full shadow-lg"
          />
          <h3 className="font-semibold text-2xl mt-6">Summer Vu</h3>
          <p className="font-light text-lg">Strategic Communicator</p>
          <hr className="border-t border-[#1E40AF] w-16 mt-2" />
          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://www.linkedin.com/in/summer-vu-237442187/" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] hover:text-[#93C5FD]">
                <FaLinkedin size={32} />
            </a>
            <a className="text-[#1E40AF] hover:text-[#93C5FD]">
                <FaFacebook size={32} />
            </a>
            <a className="text-[#1E40AF] hover:text-[#93C5FD]">
                <FaInstagram size={32} />
            </a>
          </div>
        </div>
        <div className="flex-grow">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
