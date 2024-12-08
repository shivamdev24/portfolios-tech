import Link from 'next/link'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import Image from "next/image"
import Logo from "@/assets/Plogo.png"


const Navbar = () => {
  return (
    <div className='backdrop-blur-lg sticky top-0 z-50  px-10 h-20 flex justify-center items-center bg-gray-800'>
      <div className='max-w-7xl w-full  mx-auto text-white flex justify-between items-center '>
        <div>
          <Image src={Logo} width={100} alt="logo"/>
        </div>
        <div className='hidden lg:block'>
          <ul className='flex gap-10 text-white font-bold text-md'>
            <li><a className='hover:text-cyan-500 duration-500' href="/">Home</a></li>
            <li><a className='hover:text-cyan-500 duration-500' href="#feature">Feature</a></li>
            <li><Link className='hover:text-cyan-500 duration-500' href="/">Blog</Link></li>
            <li><a className='hover:text-cyan-500 duration-500' href="#faq">FAQ</a></li>
            <li><a className='hover:text-cyan-500 duration-500' href="/">Login</a></li>
            <li><a className='hover:text-cyan-500 duration-500 bg-white text-black p-3 rounded px-5' href="/">Signup</a></li>
          </ul>
        </div>
        <div className='text-white lg:hidden'>
          <Sheet>
            <SheetTrigger><Menu /></SheetTrigger>
            <SheetContent className='flex justify-start'>
              <SheetHeader>
                <div className='flex flex-col items-center'>
                  <Image src={Logo} className='border rounded-lg ' width={50} alt="logo" />
                  <SheetTitle className='text-blue-600 text-xl'>
                    Portfolio.<span className='text-black'>Tech</span>
                  </SheetTitle>
                </div>
                <ul className='flex flex-col gap-5 pt-10 text-black font-bold text-lg'>
                  <li><Link className='hover:text-cyan-500 duration-500' href="">Home</Link></li>
                  <li><Link className='hover:text-cyan-500 duration-500' href="">Home</Link></li>
                  <li><Link className='hover:text-cyan-500 duration-500' href="">Home</Link></li>
                  <li><Link className='hover:text-cyan-500 duration-500' href="">Home</Link></li>
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </div>
  );
};

export default Navbar;

