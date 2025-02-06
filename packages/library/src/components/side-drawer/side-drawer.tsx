import * as React from 'react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/react'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'

export function SideDrawer({ children }: { children: React.ReactNode }) {
  return <Sheet>{children}</Sheet>
}

export function SideDrawerTrigger({ children }: { children: React.ReactNode }) {
  return <SheetTrigger asChild>{children}</SheetTrigger>
}

type SideDrawerContentProps = {
  title: string
  description?: string
  children: React.ReactNode
}

export function SideDrawerContent(props: SideDrawerContentProps) {
  const { title, description, children } = props

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>{title}</SheetTitle>
        {description && <SheetDescription>{description}</SheetDescription>}
      </SheetHeader>
      {children}
    </SheetContent>
  )
}

export function SideDrawerFooter({ children }: { children: React.ReactNode }) {
  return <SheetFooter>{children}</SheetFooter>
}

export function SideDrawerClose({ children }: { children: React.ReactNode }) {
  return <SheetClose asChild>{children}</SheetClose>
}
