import * as React from 'react'

import { SidebarTrigger } from '../ui/sidebar'

export function AppHeader() {
  return (
    <header className="sticky flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
    </header>
  )
}
