import { BellIcon, ChartPieIcon, HomeIcon, LayoutDashboardIcon, UserPlusIcon } from 'lucide-react'
import React from 'react'

import { Separator } from '@/components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const groups = [
  {
    id: 'main',
    items: [
      {
        title: 'Home',
        url: '#',
        icon: HomeIcon,
      },
      {
        title: 'Dashboards',
        url: '#',
        icon: LayoutDashboardIcon,
      },
      {
        title: 'Alerts',
        url: '#',
        icon: BellIcon,
      },
    ],
  },
  {
    id: 'analysis',
    items: [
      {
        title: 'Acquisition Analysis',
        url: '#',
        icon: UserPlusIcon,
      },
      {
        title: 'Journey Analysis',
        url: '#',
        icon: ChartPieIcon,
      },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="h-16 border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <img
                  src="https://assets.contentsquare.com/design-tokens/assets/brand/csq/brand-assets-logo-brand-mark.svg"
                  alt="ContentSquare"
                  className="h-5"
                />
                <span className="sr-only">ContentSquare</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {groups.map((group, index) => (
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
