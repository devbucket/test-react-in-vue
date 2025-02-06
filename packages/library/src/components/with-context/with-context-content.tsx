import * as React from 'react'

import { Input } from '@/components/ui/input'

import { useName } from './hooks'

export function WithContextContent() {
  const [name, setName] = useName()

  return (
    <div className="py-4">
      <p className="items-center p-2">
        The name is <strong>{name}</strong>
      </p>
      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}
