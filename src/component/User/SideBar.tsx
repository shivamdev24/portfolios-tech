"use client"




import {  Home, BriefcaseBusiness, LogOut, SquareUser, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useRouter} from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/user",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/user/profile",
    icon: SquareUser,
  },
  {
    title: "Portfolio",
    url: "/user/portfolio",
    icon: BriefcaseBusiness,
  },
  {
    title: "Settings",
    url: "/user/setting",
    icon: Settings,
  },
  {
    title: "Logout",
    url: "#",
    icon: LogOut,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onclick: (logout: () => any) => logout(), // pass logout function reference here
  },
]

interface Profile {
  image_url: string
  email: string
}

export function AppSidebar() {

  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await fetch("/api/user/profile")
        if (!response.ok) {
          throw new Error("Failed to fetch user details")
        }
        const data = await response.json()
        setProfile(data.user)
        console.log(data)
      } catch (error) {
        console.error("Failed to fetch user details", error)
      }
    }

    getUserDetails()
  }, [])

  const logout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST", // Ensure that the method is POST
      })
      if (!response.ok) {
        throw new Error("Logout failed")
      }
      const data = await response.json()
      console.log(data.message)
      router.push("/")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex gap-3">
            <Avatar className="border bg-white text-black">
              <AvatarImage
                src={profile?.image_url || "/default-avatar.png"}
                className="object-cover object-center"
              />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <p className="text-black text-xs">{profile?.email}</p>
          </SidebarGroupLabel>
          <SidebarGroupContent className="pt-6">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    onClick={() => {
                      if (item.onclick) item.onclick(logout)
                    }}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
