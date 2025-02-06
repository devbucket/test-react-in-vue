import * as React from 'react'

type NameContextType = {
  name: string
  setName: (name: string) => void
}

export const NameContext = React.createContext<NameContextType>({ name: '', setName: () => {} })
