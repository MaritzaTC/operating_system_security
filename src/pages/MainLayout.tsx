import { AppSidebar } from "@/components/app-sidebar"

import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-screen min-h-screen overflow-x-hidde'>
            <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 40)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
     <main className='w-full'>{children}</main> 
      </SidebarInset>
    </SidebarProvider>
      
    </div>
  );
};

export default MainLayout;
