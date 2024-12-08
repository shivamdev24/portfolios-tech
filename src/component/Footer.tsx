// import Link from "next/link";
import React from "react";
import Image from "next/image";

import BrandImg from "@/assets/Plogo.png";
import Link from "next/link";

function Footer() {
    return (
        <footer className="py-10 border-t bg-gray-800 text-white  ">
            <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center">
                    <Image
                        src={BrandImg}
                        alt="brandImg"
                        className="h-32 p-1  rounded-[6px]   object-cover w-32 object-top"
                    />
                </div>
                {/* <div className="mt-8 md:mt-0">
                    <h1 className="font-bold text-lg">Quick Links</h1>
                    <div className="flex flex-col">
                        <Link className="hover:text-blue-500 duration-500" href="/about">
                            About
                        </Link>
                        <Link className="hover:text-blue-500 duration-500" href="/service">
                            Services
                        </Link>
                        <Link className="hover:text-blue-500 duration-500" href="/work">
                            Our Work
                        </Link>
                        <Link className="hover:text-blue-500 duration-500" href="/our-team">
                            Our Team
                        </Link>
                    </div>
                </div>
                <div className="mt-4 md:mt-0">
                    <h1 className="font-bold text-lg">Get In Touch</h1>
                    <div>
                        <p>Contact No :+91 88270 15401</p>
                        <p>
                            Email : <a href="mailto:admin@tecklo.com">admin@noblessetech.com</a>
                        </p>
                        <p>Office: 27358 32 avenue, Aldergrove, BC V4W 3M5</p>
                    </div>
                </div> */}
            <div className="p-5 text-center  max-w-4xl mx-auto flex flex-col gap-2 itme-center justify-center">
                    <p>copyright &copy; 2024 <Link href="/" className="underline">Portfolio.Tech</Link> All Rights Reserved.</p>
                {/* <p className="text-sm">
          Made by{" "}
          <a href="https://noblessetech.com/" className="font-bold underline">
            Noblessetech
          </a>
        </p> */}
            </div>
            </div>
        </footer>
    );
}

export default Footer;