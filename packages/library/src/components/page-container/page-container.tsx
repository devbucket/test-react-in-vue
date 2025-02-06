import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const containerVariants = cva('w-full mx-auto flex flex-col', {
  variants: {
    padding: {
      none: 'p-0',
      small: 'p-4',
      medium: 'p-6',
      large: 'p-8',
    },
    maxWidth: {
      full: 'max-w-full',
      xl: 'max-w-screen-xl',
      lg: 'max-w-screen-lg',
      md: 'max-w-screen-md',
      sm: 'max-w-screen-sm',
    },
  },
  defaultVariants: {
    padding: 'medium',
    maxWidth: 'xl',
  },
})

type PageContainerProps = VariantProps<typeof containerVariants> &
  React.HTMLAttributes<HTMLDivElement>

export function PageContainer({
  children,
  padding,
  maxWidth,
  className,
  ...rest
}: PageContainerProps) {
  return (
    <div className={cn('flex w-full 2xl:justify-center', className)} {...rest}>
      <div className="max-w-[1600px] w-full flex flex-1 flex-col gap-8 py-8 px-10">{children}</div>
    </div>
  )
}
