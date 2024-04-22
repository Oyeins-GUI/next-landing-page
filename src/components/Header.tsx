"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import instagram from "@/assets/instagram.svg";
import facebook from "@/assets/facebook.svg";
import x from "@/assets/x.svg";
import { Josefin_Slab } from "next/font/google";
import { useState } from "react";
import NavToggle from "./NavToggle";

const josefineSlab = Josefin_Slab({
   weight: ["600"],
   subsets: ["latin"],
});

export default function Header() {
   const [showMenu, setShowMenu] = useState(false);

   return (
      <header className="w-full">
         <nav className="max-w-6xl mx-auto px-3 py-2 flex justify-between items-center">
            <Link
               href="/"
               className="border border-secondary-800 rounded-full w-16 h-16"
            >
               <Image src={logo} alt="logo" />
            </Link>

            <ul
               className={`${josefineSlab.className} ${
                  showMenu
                     ? "absolute text-[1rem] bg-secondary-800 top-20 left-0 right-0"
                     : "hidden"
               } text-primary md:text-secondary-600 md:text-[1.125rem] md:static md:flex md:items-center md:gap-4 md:bg-primary animate-slide-down`}
            >
               <li className="mb-2 mt-[2px] md:mt-0 md:mb-0 w-full md:w-auto hover:bg-primary hover:text-secondary-800 p-2">
                  <Link
                     href="/"
                     className="p-1 md:text-secondary-600 px-3 py-2"
                  >
                     Home
                  </Link>
               </li>
               <li className="mb-2 md:mb-0 w-full md:w-auto hover:bg-primary hover:text-secondary-800 p-2">
                  <Link
                     href="#"
                     className="p-1 md:text-secondary-600 px-3 py-2"
                  >
                     About Us
                  </Link>
               </li>
               <li className="mb-2 md:mb-0 w-full md:w-auto hover:bg-primary hover:text-secondary-800 p-2">
                  <Link
                     href="#"
                     className="p-1 md:text-secondary-600 px-3 py-2"
                  >
                     Testimonials
                  </Link>
               </li>
               <li className="mb-[2px] md:mb-0 w-full md:w-auto hover:bg-primary hover:text-secondary-800 p-2">
                  <Link
                     href="#"
                     className="p-5 md:text-secondary-600 px-3 py-2"
                  >
                     Contact Us
                  </Link>
               </li>
            </ul>

            <div className="flex items-center gap-4">
               <Link href="#">
                  <Image src={instagram} alt="instagram" />
               </Link>
               <Link href="#">
                  <Image src={facebook} alt="facebook" />
               </Link>
               <Link href="#">
                  <Image src={x} alt="x(twitter)" />
               </Link>
               <NavToggle onClick={() => setShowMenu((prev) => !prev)} />
            </div>
         </nav>
      </header>
   );
}
