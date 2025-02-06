import { type VariantProps, cva } from 'class-variance-authority'
import { ExternalLinkIcon, StarIcon, XIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { Text } from '../text'
import { Button } from '../ui/button'

const cardVariants = cva('rounded-lg grid items-start bg-white relative h-full gap-4', {
  variants: {
    border: {
      outline: 'border border-neutral-200',
      shadow: 'shadow-md',
      none: 'border-none',
    },
    orientation: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
    padding: {
      none: 'p-0',
      small: 'py-1 px-2',
      medium: 'py-3 px-4',
      large: 'py-5 px-6',
    },
    usage: {
      default: '',
      upsell: 'border-l-4 border-orange-500',
    },
    columns: {
      one: 'w-full',
      two: 'grid grid-cols-2 gap-4',
      three: 'grid grid-cols-3 gap-4',
    },
  },
  defaultVariants: {
    border: 'outline',
    orientation: 'vertical',
    padding: 'medium',
    usage: 'default',
    columns: 'one',
  },
})

// Define Props
interface CardProps
  extends VariantProps<typeof cardVariants>,
    React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  description?: string
  icon?: React.ReactNode
  showCloseButton?: boolean
  onClose?: () => void
  children?: React.ReactNode
  pill?: string
}

export function Card(props: CardProps) {
  const {
    title,
    subtitle,
    description,
    icon,
    border,
    orientation,
    padding,
    usage,
    columns,
    showCloseButton = false,
    onClose,
    children,
    className,
    pill,
    ...rest
  } = props
  return (
    <article
      className={cn(cardVariants({ border, orientation, padding, usage, columns }), className)}
      {...rest}
    >
      <div className="flex flex-col">
        <header>
          {pill && (
            <div>
              <Text content={pill} />
            </div>
          )}
          {/* Title */}
          <Text variant="header4" content={title} />
          {/* Subtitle */}
          {subtitle && (
            <div className="flex gap-2 mb-1">
              {icon && <span className="w-5 h-5">{icon}</span>}
              <Text
                as="h4"
                variant="subtitle2"
                content={subtitle}
                className="text-muted-foreground"
                tabularNumber={false}
              />
            </div>
          )}
        </header>

        <div>
          {description && <Text content={description} />}
          {children}
        </div>
      </div>
      <div className="flex flex-col self-end min-w-0 w-full">
        <div className="flex gap-2 justify-between w-full">
          <Button variant="ghost" className="text-indigo-500 hover:text-indigo-500">
            <ExternalLinkIcon className="size-4" />
            Open Speed Analysis Lab
          </Button>
          <Button variant="ghost" className="px-2.5 text-indigo-500 hover:text-indigo-500">
            <StarIcon />
          </Button>
        </div>
      </div>
      {/* Close Button */}
      {showCloseButton && (
        <button
          className="absolute top-4 right-4 inline-flex p-0.5 rounded-full hover:bg-black hover:text-white"
          onClick={onClose}
          aria-label={`Dismiss ${title}`}
        >
          <XIcon className="size-4" />
        </button>
      )}
    </article>
  )
}
