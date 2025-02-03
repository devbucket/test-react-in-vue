import * as React from 'react'

import { useName } from './with-context'

export function WithContextContent() {
  const [name, setName] = useName()

  return (
    <div>
      <p className="items-center p-2">
        The name is <strong>{name}</strong>
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border bg-white px-3 py-2 rounded focus:outline-2 focus:outline-purple-300"
      />
    </div>
  )
}
