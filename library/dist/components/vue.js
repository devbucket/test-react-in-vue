import { createRoot } from "react-dom/client";
import { applyPureReactInVue, setVeauryOptions } from "veaury";
import { SimpleTest as SimpleTestBase } from "./simple-test";
import {
  WithContext as WithContextBase,
  WithContextContent as WithContextContentBase
} from "./with-context";
setVeauryOptions({
  react: {
    createRoot
  }
});
const WithContext = applyPureReactInVue(WithContextBase);
const WithContextContent = applyPureReactInVue(WithContextContentBase);
const SimpleTest = applyPureReactInVue(SimpleTestBase);
export {
  SimpleTest,
  WithContext,
  WithContextContent
};
//# sourceMappingURL=vue.js.map
