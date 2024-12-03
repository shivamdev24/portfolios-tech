


// import {
//     Menubar,
//     MenubarMenu,
// } from "@/components/ui/menubar";

// import {
//     Sheet,
//     SheetContent,
//     SheetHeader,
//     SheetTrigger,
// } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import BrandImg from "@/assets/Logo.png";

function Navbar() {
    return (
        <div className="sticky top-0 w-full bg-[#0c1724] z-50">
            <div className="   ">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-5 text-black py-3">
                    <div className="relative">
                        <Link href="/" className="flex items-center " >
                            <Image
                                src={BrandImg}
                                alt="brandImg"
                                
                                className="w-20"
                            />
                            <span className="text-white text-xl font-bold">Portfolio Tech</span>
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                       <ul className="flex gap-4">
                       
                        <li>
                                <a href="#feature" className="text-white ">Feature</a>
                        </li>
                        <li>
                                <a href="#blog" className="text-white ">Blog</a>
                        </li>
                        <li>
                                <a href="#faq" className="text-white ">FAQ</a>
                        </li>
                        <li>
                                <Link href="/" className="text-white ">Login</Link>
                        </li>
                        <li>
                                <Link href="/" className="bg-white text-[#0c1724] p-2 rounded">Signup</Link>
                        </li>
                       </ul>
                    </div>
                    {/* <div className="">
                        <Sheet>
                            <SheetTrigger>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-8 bg-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                                    />
                                </svg>
                            </SheetTrigger>
                            <SheetContent className="w-56 bg-white">
                                <SheetHeader>
                                    <div className="flex flex-col gap-4 mt-6 text-center">
                                        <a href="#" className="hover:text-blue-500 duration-500">
                                            Home
                                        </a>

                                    </div>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;