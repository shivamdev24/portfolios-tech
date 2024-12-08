/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/Logo.png"
import { Button } from "@/components/ui/button";


import {  SidebarTrigger } from "@/components/ui/sidebar"



interface Profile {
  image_url: string;
  email: string;
}

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [profile, setProfile] = useState<Profile>()


  // Check if the current path is '/' or starts with '/auth'
  if (pathname === "/" || !pathname.startsWith("/user")) {
    return null; // Do not render the Sidebar
  }


  useEffect(() => {
    const getUserDetails = async () => {
      
      try {
        const response = await fetch("/api/user/profile");
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        const data = await response.json();
        setProfile(data.user);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch user details", error);
      } 
    };

    getUserDetails();
  }, []);


  const logout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST", // Ensure that the method is POST
      });
      if (!response.ok) {
        throw new Error("Logout failed");
      }
      const data = await response.json();
      console.log(data.message);
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

 



  

  return (
    <div>
      <div className="w-full h-20 bg-gray-400 text-black drop-shadow-md flex justify-between sticky top-0 items-center px-5">
        <div className="hidden lg:block">

      <SidebarTrigger className="w-10  bg-white ml-4 " />
        </div>
      <div className="flex gap-2 items-center">


      

<Link href="/user" className="" >
    <Image src={Logo} width={60}  alt="Brand Logo" className=" rounded-xl  bg-white  p-1  border object-cover" />
  </Link>
      </div>


      
               
       
                <div className="flex gap-4 items-end lg:hidden">
                  <p className="text-black text-xs ">{profile?.email}</p>
                <div className="flex gap-4 items-center">
                <DropdownMenu >
  <DropdownMenuTrigger className="border-no">
  <Avatar className=" border bg-white text-black">
                  <AvatarImage src={profile?.image_url || '/default-avatar.png'} className="object-cover object-center " />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="bg-white">
  <DropdownMenuLabel>My Account</DropdownMenuLabel>
  <DropdownMenuSeparator />
  <DropdownMenuItem asChild>
    <Link href="/user">Dashboard</Link>
  </DropdownMenuItem>
  <DropdownMenuItem asChild>
    <Link href="/user/profile">Profile</Link>
  </DropdownMenuItem>
  <DropdownMenuItem asChild>
    <Link href="/user/portfolio">Portfolio</Link>
  </DropdownMenuItem>
  <DropdownMenuItem asChild>
    <Link href="/user/setting">Setting</Link>
  </DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>



<Button className="bg-white" onClick={logout}>
  Logout
                   <span> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                  </svg></span>
                </Button>
                </div>
                </div>
      </div>
    </div>
  );
};

export default Sidebar;



