"use client";
import { Rows, Cols } from "../layout/direction";
import Link from 'next/link';
import { BsList, BsX } from 'react-icons/bs'
import { navMenu } from "../asset/asset";
import Button from "../components/button";
import Logo from "../components/logo";
import Paraf from "../components/typography/paraf";
import React, { useState } from 'react';
import { CurrentPage } from "../utils/util";

export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);
   const currentPage = CurrentPage()
   const isCurrentAbout = currentPage == "about";
   const toggleMenu = () => setMenuOpen(!menuOpen);
   return (
      <Rows className={`w-full h-18 px-0 sm:px-5 py-5 absolute top-0 z-50 ${menuOpen ? 'overflow-hidden' : ''}`}>
         <Rows whiteSpaceX className="flex justify-between items-center h-full w-full">
            <Link href={"/"} >
               <Logo isAbout={isCurrentAbout} withLogo />
            </Link>
            <Rows className={`hidden lg:flex items-center ${menuOpen ? 'hidden' : 'flex'} gap-8`}>
               {navMenu.map((menu, index) => {
                  const isCurrent = menu.url.includes(currentPage)
                  return(
                  <Button variant={"none"} key={index}>
                     <Link href={menu.url}>
                        <Paraf className={`${isCurrent ? "font-bold" : ""} ${isCurrentAbout ? "text-white" : ""} `}>
                           {menu.text}
                        </Paraf>
                     </Link>
                  </Button>
               )})}
               <Button variant={"primary"} className={`px-5 py-3 flex-shrink-0 ${isCurrentAbout && "bg-white"}`}>
                  <Paraf className={`${isCurrentAbout ? "text-primary" : "text-white"} text-center text-[18px]`}>
                     Sign up
                  </Paraf>
               </Button>
            </Rows>
            <Rows onClick={toggleMenu} className="cursor-pointer lg:hidden pl-24">
               <BsList className="h-8 w-8 text-black" />
            </Rows>
         </Rows>
         {menuOpen && (
            <Cols className="fixed z-10 top-0 left-0 w-[75%] lg:hidden h-screen p-10 ease-in-out duration-700 bg-slate-50">
               <Rows className="flex w-full items-center justify-end">
                  <Rows onClick={toggleMenu} className="cursor-pointer">
                     <BsX className="h-8 w-8 text-black" />
                  </Rows>
               </Rows>
               <Cols className="flex-col text-center my-10">
                  {navMenu.map((menu, index) => {
                     const isCurrent = menu.url.includes(currentPage)
                     return(
                     <Button variant={"none"} key={index} className={`text-center py-3 ${isCurrent ? " font-bold" : ""}`} onClick={() => setMenuOpen(false)}>
                        <Link href={menu.url}>
                           <Paraf className={`${isCurrent ? " font-bold" : ""}`}>
                              {menu.text}
                           </Paraf>
                        </Link>
                     </Button>
                  )})}
                  <Button className='py-2 px-5' variant={"primary"}>
                     <Paraf className={` text-white text-center text-[18px]`}>
                        Sign up
                     </Paraf>
                  </Button>
               </Cols>
            </Cols>
         )}
      </Rows>
   )
}