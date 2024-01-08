import * as React from "react";
import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#d29d61]">
      <header className="flex justify-between items-center py-4 px-8 bg-[#ffffff] shadow-md">
        <div className="text-[#1E40AF] font-semibold text-xl">Summer Vu</div>
        <nav>
          <ul className="flex space-x-6 font-medium">
            <li className="hover:text-[#1E40AF] text-black transition-colors duration-300">
              <Link href="/SummerVu">ABOUT ME</Link>
            </li>
            <li className="hover:text-[#1E40AF] text-black transition-colors duration-300">
                <Link href="/../Resume">
                    RESUME
                </Link>
            </li>
            <li className="hover:text-[#1E40AF] text-black transition-colors duration-300">
                <Link href="/../Classes">
                    CLASSES
                </Link>
            </li>
            <li className="hover:text-[#1E40AF] text-black transition-colors duration-300">
                <Link href="/../Projects">
                    PROJECTS
                </Link>
            </li>
            <li className="hover:text-[#1E40AF] text-black transition-colors duration-300">
              <Link href="/Contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex flex-1">
        <div className="w-full lg:w-1/3 xl:w-1/4 p-12 flex flex-col items-center bg-[#3d83a4]">
          <img
            src="/images/summer.png"
            alt="Dani Berch portrait"
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
        <div className="w-full lg:w-2/3 xl:w-3/4 p-12 bg-[#F3F4F6] mx-auto">
            <h1 className="flex justify-center font-semibold text-7xl text-black mb-6">Hello</h1>
            <h2 className="flex justify-center font-light text-3xl text-black mb-6">
                Here's who I am & what I do
            </h2>
            <div className="flex justify-center">
                <button className="bg-[#1E40AF] text-white py-3 px-8 rounded-full mr-4">
                    <Link href="/../Resume">
                        RESUME
                    </Link>
                </button>
                <button className="border border-[#1E40AF] text-[#1E40AF] py-3 px-8 rounded-full">
                    <Link href="/../Projects">
                        Projects
                    </Link>
                </button>
            </div>
            <p className="mt-6 text-lg text-black font-light px-32"> 
                With nearly three years in the communication industry and a degree
                in Strategic and Corporate Communication, I am excited to bring the
                skills I have acquired to an organization's culture. I pride myself
                on always taking on tasks with an eagerness to learn, the confidence
                to succeed, and the humility to ask questions and ask for guidance
                along the way.
            </p>
            <div className="flex flex-col items-start px-32 mt-10"> {/* Aligns items vertically and to the start (left side) */}
                <div className="flex items-center mb-4"> {/* Each item group */}
                    <p className="text-[#374151] uppercase tracking-widest text-xs mr-4">Call</p> {/* Added margin for separation */}
                    <p className="text-[#374151]">619-600-9797</p>
                </div>
                <div className="flex items-center"> {/* Each item group */}
                    <p className="text-[#374151] uppercase tracking-widest text-xs mr-4">Write</p> {/* Added margin for separation */}
                    <p className="text-[#374151]">summerv2001@yahoo.com</p>
                </div>
            </div> 
        </div>
      </div>
    </div>
  );
}