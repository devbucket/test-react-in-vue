import { createRoot } from 'react-dom/client'
import { applyPureReactInVue, setVeauryOptions } from 'veaury'

import { SimpleTest as SimpleTestBase } from './simple-test'
import { WithContext as WithContextBase } from './with-context'
import { WithContextContent as WithContextContentBase } from './with-context/with-context-content'

setVeauryOptions({
  react: {
    createRoot,
  },
})

export const WithContext = applyPureReactInVue(WithContextBase)
export const WithContextContent = applyPureReactInVue(WithContextContentBase)
export const SimpleTest = applyPureReactInVue(SimpleTestBase)
