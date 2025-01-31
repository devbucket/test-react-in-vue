import * as React from 'react'

type NameContextType = {
  name: string
  setName: (name: string) => void
}

const NameContext = React.createContext<NameContextType>({ name: '', setName: () => {} })

export function WithContext({ children }: { children: React.ReactNode }) {
  const [name, setName] = React.useState('test')

  return <NameContext value={{ name, setName }}>{children}</NameContext>
}

export const useName = () => {
  const { name, setName } = React.use(NameContext)
  return [name, setName] as const
}
