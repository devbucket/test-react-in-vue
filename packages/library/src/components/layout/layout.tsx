import React from 'react'

import { AppHeader } from '../app-header/app-header'
import { AppSidebar } from '../app-sidebar/app-sidebar'
import { SidebarInset, SidebarProvider } from '../ui/sidebar'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="min-h-[calc(100%-56px)] relative">
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <div className="flex-1">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
