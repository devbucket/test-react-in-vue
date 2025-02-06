import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const textVariants = cva('', {
  variants: {
    variant: {
      body1: 'text-base',
      body2: 'text-sm',
      header1: 'text-4xl font-bold',
      header2: 'text-3xl font-bold',
      header3: 'text-2xl font-semibold',
      header4: 'text-xl font-bold',
      header5: 'text-lg font-semibold',
      subtitle1: 'text-lg text-gray-600',
      subtitle2: 'text-sm text-gray-500',
    },
    textFormat: {
      ellipsis: 'truncate',
      'line-break': 'whitespace-pre-line',
      formatted: 'whitespace-pre-wrap',
    },
    tabularNumber: {
      true: 'tabular-nums',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'body2',
    textFormat: 'formatted',
    tabularNumber: false,
  },
})

type TextProps = VariantProps<typeof textVariants> &
  Omit<React.HTMLAttributes<HTMLElement>, 'children' | 'style'> & {
    as?: keyof React.JSX.IntrinsicElements
    content: string
    highlight?: string
    maxVisibleLines?: number
  }

export function Text(props: TextProps) {
  const {
    as: AsElement = 'span',
    content,
    variant,
    textFormat,
    tabularNumber,
    highlight,
    maxVisibleLines,
    className,
    ...rest
  } = props

  // Apply max lines when textFormat is "line-break"
  const maxLinesStyle =
    textFormat === 'line-break' && maxVisibleLines
      ? {
          WebkitLineClamp: maxVisibleLines,
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }
      : {}

  // Highlight functionality
  const renderTextWithHighlight = (text: string, highlight: string | undefined) => {
    if (!highlight) return text
    const regex = new RegExp(`(${highlight})`, 'gi')
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      ),
    )
  }

  return (
    // @ts-expect-error - `as` prop is not defined in `React` types
    <AsElement
      className={cn(textVariants({ variant, textFormat, tabularNumber }), props.className)}
      style={maxLinesStyle as React.CSSProperties}
      {...rest}
      data-testid="text"
    >
      {renderTextWithHighlight(content, highlight)}
    </AsElement>
  )
}

export default Text
