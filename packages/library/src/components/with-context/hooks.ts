import * as React from 'react'

import { NameContext } from './context'

export function useName() {
  const { name, setName } = React.use(NameContext)
  return [name, setName] as const
}
