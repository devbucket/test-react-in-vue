import * as React from "react";
import { useName } from "./with-context";
function WithContextContent() {
  const [name, setName] = useName();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "items-center p-2" }, "The name is ", /* @__PURE__ */ React.createElement("strong", null, name)), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: name,
      onChange: (e) => setName(e.target.value),
      className: "border bg-white px-3 py-2 rounded focus:outline-2 focus:outline-purple-300"
    }
  ));
}
export {
  WithContextContent
};
//# sourceMappingURL=with-context-content.js.map
