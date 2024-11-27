

import Link from 'next/link'
import React from 'react'


const navlink = [
    {
        link: "/resume",
        title: "Resume",
    },
    {
        link: "/blog",
        title: "Blog",
    },
    {
        link: "/experience",
        title: "Work",
    },
    {
        link: "/contact",
        title: "Contact",
    },
   
    
    
]


function Navbar() {
  return (
      <div className=' w-full fixed border-b backdrop-blur-[2px]  top-0 z-40  flex justify-center'>
        {/* <div className='w-full absolute   top-0 h-20 z-10'></div> */}
          <div className=' w-full    max-w-7xl rounded-lg my-2 z-30 flex items-center justify-between px-4'>
              <div className='w-auto px-4 h-8 rounded bg-black  text-white flex justify-center items-center'>
                  <Link href={"/"}>Portfolio.tech</Link>
              </div>

              <div className='hidden lg:block'>

                  <div className='flex gap-4 p-4 items-center '>
                      {navlink.map((props, idx) => (
                          <Link href={props.link} key={idx} className="block text-base  overflow-hidden">
                              <div
                                  className="h-[22px] flex flex-col gap-5 transition-transform duration-300 ease-in-out hover:-translate-y-10 will-change-transform"
                                  style={{ willChange: 'transform' }} // Optional inline style for better browser support
                              >
                                  <span className="flex h-[22px] items-center text-purple-500">{props.title}</span>
                                  <span className="flex h-[22px] items-center font-bold text-white">{props.title}</span>
                              </div>
                          </Link>
                      ))}

                      <div className='w-auto px-8  h-10 rounded bg-black hover:bg-gray-800 duration-500 border text-white flex justify-center items-center'>
                          <Link href={"/"}>Login</Link>
                      </div>
                  </div>
              </div>


          </div>
   </div>
  )
}

export default Navbar