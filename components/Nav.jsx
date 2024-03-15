"use client";

import { useState } from "react"; // import useState hook from react
import Link from "next/link"; // import Link component from next.js

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <div
      className="pt-4 pb-12 px-5  lg:px-32 w-full lg:text-center max-lg:flex justify-between items-center"
    
    >
      <span className="text-3xl text-white  font-normal">Omotola Elatuyi</span>

      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {/* // toggle class based on isNavOpen state */}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]  ">
              <li className="hover:border-b-2  ">
                <a href="/" className=" text-[#1AABAC] font-bold text-xl">
                 Home
                </a>
              </li>
              <li className="hover:border-b-2  ">
                <a
                  href="/publications"
                  className="text-[#1AABAC] font-bold text-xl"
                >
                    Publications
                </a>
              </li>
              <li className="hover:border-b-2  ">
                <a href="/about-me" className="text-[#1AABAC] font-bold text-xl">
                  About me
                </a>
              </li>
              <li className="hover:border-b-2  ">
                <a href="/contacts" className="text-[#1AABAC] font-bold text-xl">
                 Contacts
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-10 pt-3 lg:flex items-center justify-center">
          <li>
            <Link href="/" className="block text-white font-normal text-base ">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/publications"
              className="block text-white font-normal text-base "
            >
              Publications
            </Link>
          </li>
          <li>
            <Link
              href="/about-me"
              className="block text-white font-normal text-base "
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className="block text-white font-normal text-base "
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
