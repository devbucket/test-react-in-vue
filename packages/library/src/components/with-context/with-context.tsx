import * as React from 'react'

import { NameContext } from './context'
import { WithContextContent } from './with-context-content'

export function WithContext({ children }: { children: React.ReactNode }) {
  const [name, setName] = React.useState('test')

  return <NameContext value={{ name, setName }}>{children}</NameContext>
}

WithContext.Content = WithContextContent
