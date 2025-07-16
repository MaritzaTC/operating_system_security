import * as React from "react"
import {

  IconDashboard,

  IconBrandAndroid,

  IconBrandFinder,


  IconBrandDebian,
 IconBrandWindowsFilled
} from "@tabler/icons-react"


import { NavMain } from "@/components/nav-main"

import {
  Sidebar,
  SidebarContent,

  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Windows",
      url: "/windows/10",
      icon: IconBrandWindowsFilled,
    },
    {
      title: "Androi",
      url: "/androi",
      icon: IconBrandAndroid,
    },
    {
      title: "MacOs",
      url: "/macos",
      icon: IconBrandFinder,
    },
     {
      title: "Linux",
      url: "/linux",
      icon: IconBrandDebian,
    },
    
  ],
 
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
            
                <span className="text-base font-semibold">S.O</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />

      </SidebarContent>
      
    </Sidebar>
  )
}
