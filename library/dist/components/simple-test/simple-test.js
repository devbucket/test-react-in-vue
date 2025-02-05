import * as React from "react";
import { cn } from "../../utils/style";
function SimpleTest({ children, className, ...props }) {
  return /* @__PURE__ */ React.createElement("div", { className: cn("p-2 bg-blue-200 rounded", className), ...props }, "SimpleTest");
}
export {
  SimpleTest
};
//# sourceMappingURL=simple-test.js.map
