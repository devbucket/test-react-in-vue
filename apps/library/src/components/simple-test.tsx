import * as React from 'react'

import { cn } from '@/lib/utils'

export function SimpleTest({ children, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('p-2 bg-blue-200 rounded', className)} {...props}>
      SimpleTest
    </div>
  )
}
