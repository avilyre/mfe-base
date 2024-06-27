import { Fragment, useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <Fragment>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </Fragment>
  )
}