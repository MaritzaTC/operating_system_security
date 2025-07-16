import Link from "next/link"
import { type Icon } from "@tabler/icons-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">


        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Link href={item.url} passHref>
                <SidebarMenuButton asChild tooltip={item.title}>
                  {/* Usamos "asChild" para que el botón funcione como enlace */}




<SidebarMenuItem key={item.title}>
  <SidebarMenuButton asChild tooltip={item.title}>
    <Link href={item.url} className="flex items-center gap-2">
      {item.icon && <item.icon />}
      <span>{item.title}</span>
    </Link>
  </SidebarMenuButton>
</SidebarMenuItem>





                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
