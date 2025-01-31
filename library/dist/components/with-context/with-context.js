import*as e from"react";const a=e.createContext({name:"",setName:()=>{}});function s({children:t}){const[n,o]=e.useState("test");return e.createElement(a,{value:{name:n,setName:o}},t)}const m=()=>{const{name:t,setName:n}=e.use(a);return[t,n]};export{s as WithContext,m as useName};
//# sourceMappingURL=with-context.js.map
