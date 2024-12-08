




import React from 'react'
import DashNav from '@/component/User/DashNav';









import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/component/User/SideBar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='w-full relative'>
        
      <DashNav />
        {children}
      </main>
    </SidebarProvider>
  )
}

