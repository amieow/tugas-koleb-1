export default function Navbar() {
   return (
      <Rows className={`w-full h-18 px-5 py-5 ${menuOpen ? 'overflow-hidden' : ''}`}>
         <Rows className="flex justify-between items-center h-full w-full">
            <Link href={"/"} >
               <Logo withLogo />
            </Link>
            <Rows className={`hidden sm:flex items-center ${menuOpen ? 'hidden' : 'flex'} gap-8`}>
               {navMenu.map((menu, index) => (
                  <Button variant={"none"} key={index} className="active:font-bold">
                     <Link href={menu.url}>
                        <Paraf>
                           {menu.text}
                        </Paraf>
                     </Link>
                  </Button>
               ))}
               <Button variant={"primary"} className="px-5 py-2">
                  <Paraf className="text-white text-[18px]">
                     Sign up
                  </Paraf>
               </Button>
            </Rows>
            <Rows onClick={toggleMenu} className="cursor-pointer sm:hidden pl-24">
               <BsList className="h-8 w-8 text-black" />
            </Rows>
         </Rows>
         {menuOpen && (
            <Cols className="fixed z-10 top-0 left-0 w-[75%] sm:hidden h-screen p-10 ease-in-out duration-700 bg-slate-50">
               <Rows className="flex w-full items-center justify-end">
                  <Rows onClick={toggleMenu} className="cursor-pointer">
                     <BsX className="h-8 w-8 text-black" />
                  </Rows>
               </Rows>
               <Cols className="flex-col text-center my-10">
                  {navMenu.map((menu, index) => (
                     <Button variant={"none"} key={index} className="text-center py-3 active:font-bold" onClick={() => setMenuOpen(false)}>
                        <Link href={menu.url}>
                           <Paraf>
                              {menu.text}
                           </Paraf>
                        </Link>
                     </Button>
                  ))}
                  <Button className='py-2 px-5' variant={"primary"}>
                     <Paraf className="text-white text-center text-[18px]">
                        Sign up
                     </Paraf>
                  </Button>
               </Cols>
            </Cols>
         )}
      </Rows>
   )
}