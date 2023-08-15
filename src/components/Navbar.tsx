"use client"
import Button from './button'
import { BsList, BsX } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const styles = {
        navLinks: "hover:font-bold hover:text-blue-500 active:font-bold visited:font-bold"
    };
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <nav className='w-full h-18'>
            <div className='flex justify-between items-center h-full w-full px-4' >
                <Link href={"/"} >
                    <Image src={"logo.svg"} alt='logo' width={271} height={40} />
                </Link>
                <div className='hidden sm:flex'>
                    <ul className='hidden sm:flex gap-8 items-center'>
                        <li>
                            <Link href={"/"} className={styles.navLinks}>About</Link>
                        </li>
                        <li>
                            <Link href={"/"} className={styles.navLinks}>Pricing</Link>
                        </li>
                        <li>
                            <Link href={"/"} className={styles.navLinks}>Offices</Link>
                        </li>
                        <li>
                            <Link href={"/"} className={styles.navLinks}>Spaces</Link>
                        </li>
                        <li>
                            <Link href={"/"} className={styles.navLinks}>Contact us</Link>
                        </li>
                        <Button className='rounded-full bg-blue-500 text-white px-4 py-2'>Sign up</Button>
                    </ul>
                </div>
                <div onClick={toggleMenu} className="sm:hidden cursor-pointer pl-24">
                    <BsList className="h-8 w-8 text-black" />
                </div>
            </div>
            <div className={menuOpen ? 'fixed top-0 left-0 w-[75%] sm:hidden h-screen p-10 ease-in-out duration-500 bg-slate-50' : 'fixed left-[-100%] top-0 p-10 ease-out duration-500'}>
                <div className="flex w-full items-center justify-end">
                    <div onClick={toggleMenu} className="cursor-pointer">
                        <BsX className="h-8 w-8 text-black" />
                    </div>
                </div>
                <div className="flex-col text-center my-10">
                    <ul>
                        <li>
                            <Link href={"/"} className={styles.navLinks} onClick={() => setMenuOpen(false)}>About</Link>
                        </li>
                        <li>
                            <Link href={"/"} className={styles.navLinks} onClick={() => setMenuOpen(false)}>Pricing</Link>
                        </li>
                        <li>
                            <Link href={"/"} className={styles.navLinks} onClick={() => setMenuOpen(false)}>Offices</Link>
                        </li>
                        <li>
                            <Link href={"/"} className={styles.navLinks} onClick={() => setMenuOpen(false)}>Spaces</Link>
                        </li>
                        <li>
                            <Link href={"/"} className={styles.navLinks} onClick={() => setMenuOpen(false)}>Contact us</Link>
                        </li>
                        <Button className='rounded-full bg-blue-500 text-white px-4 py-2'>Sign up</Button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
