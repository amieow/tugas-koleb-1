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
      <Rows className={`w-full h-18 px-0 sm:px-5 py-5 absolute top-0 z-50 `}>
         <Rows whiteSpaceX className="flex justify-between items-center h-full w-full">
            <Link href={"/"} >
               <Logo isAbout={isCurrentAbout} withLogo />
            </Link>
            <Rows className={`hidden lg:flex items-center ${menuOpen ? 'hidden' : 'flex'} gap-8`}>
               {navMenu.map((menu, index) => {
                  const isCurrent = menu.url != "/" ? menu.url.includes(currentPage) && currentPage != "/" : menu.url == "/" && currentPage == "/"
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
               <BsList className={`h-8 w-8 ${isCurrentAbout ? "text-white" : "text-black"}`} />
            </Rows>
         </Rows>
         <Rows onBlur={() => menuOpen && setMenuOpen(false)} onWheel={() => menuOpen && setMenuOpen(false)} onClick={() => setMenuOpen(false)} className={`fixed h-full top-0 ${menuOpen ? "left-0" : "left-[-100%]"} w-full`}>
            <Cols className={`fixed z-50 top-0 transition-all ease-in-out duration-700 ${menuOpen ? " left-0 shadow-[12px_0px_59px_0px_#2d3748]" : "left-[-100%]"} min-w-[330px] w-[75%] lg:hidden h-screen border-r-2 border-r-gray-500 p-5  bg-slate-50`}>
               <Rows className="flex w-full items-center justify-between">
                  <Link scroll href={"/"}>
                     <Logo/>
                  </Link>
                  <Rows onClick={toggleMenu} className="cursor-pointer">
                     <BsX className="h-8 w-8 text-black" />
                  </Rows>
               </Rows>
               <Cols className="flex-col text-center my-10">
                  {navMenu.map((menu, index) => {
                     const isCurrent = menu.url != "/" ? menu.url.includes(currentPage) && currentPage != "/" : menu.url == "/" && currentPage == "/"
                     return(
                     <Button variant={"none"} key={index} className={`text-center py-3 ${isCurrent ? " font-bold" : ""}`} onClick={() => setMenuOpen(false)}>
                        <Link scroll href={menu.url}>
                           <Paraf className={`${isCurrent ? " font-bold border-b-2 border-blue-500 w-fit mx-auto" : ""}`}>
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
         </Rows>
      </Rows>
   )
}