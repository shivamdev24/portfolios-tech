




import Link from 'next/link'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"











export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={``}
                
            >
                <div className='backdrop-blur-lg sticky top-0 z-50  px-10 h-20 flex justify-center items-center bg-gray-800'>
                    <div className='max-w-7xl w-full  mx-auto text-white flex justify-between '>
                        <div>logo</div>
                       
                        <div className='text-white lg:hidden'>
                            <Sheet>
                                <SheetTrigger>A</SheetTrigger>
                                <SheetTitle>Name</SheetTitle>
                                <SheetContent className='flex justify-start'>
                                    <SheetHeader>
                                        <SheetTitle>Portfolio</SheetTitle>
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
                    {children}
                
            </body>
        </html>
    );
}
