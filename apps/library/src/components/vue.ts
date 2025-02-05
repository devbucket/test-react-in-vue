import { createRoot } from 'react-dom/client'
import { applyPureReactInVue, setVeauryOptions } from 'veaury'

import { SimpleTest as SimpleTestBase } from './simple-test'
import {
  WithContext as WithContextBase,
  WithContextContent as WithContextContentBase,
} from './with-context'

setVeauryOptions({
  react: {
    createRoot,
  },
})

export const WithContext = applyPureReactInVue(WithContextBase)
export const WithContextContent = applyPureReactInVue(WithContextContentBase)
export const SimpleTest = applyPureReactInVue(SimpleTestBase)
