import { useState } from "react"
import CounterElements from "./CounterElements"

const FunctionalComponentCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <CounterElements
      value={count}
      onDecrease={() => setCount(count - 1)}
      onIncrease={() => setCount(count + 1)}
    />
  )
}

export default FunctionalComponentCounter
