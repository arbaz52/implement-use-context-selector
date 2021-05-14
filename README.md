# implement-use-context-selector
Created with CodeSandbox

> React Context and useContext is often used to avoid prop drilling, however it's known that there's a performance issue. When a context value is changed, all components that useContext will re-render.
> To solve this issue, useContextSelector is proposed and later proposed Speculative Mode with context selector support. This library provides the API in userland.

- Wrap child using `useContextSelector` with `React.memo`
