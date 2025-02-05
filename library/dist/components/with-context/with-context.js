import * as React from "react";
const NameContext = React.createContext({ name: "", setName: () => {
} });
function WithContext({ children }) {
  const [name, setName] = React.useState("test");
  return /* @__PURE__ */ React.createElement(NameContext, { value: { name, setName } }, children);
}
const useName = () => {
  const { name, setName } = React.use(NameContext);
  return [name, setName];
};
export {
  WithContext,
  useName
};
//# sourceMappingURL=with-context.js.map
