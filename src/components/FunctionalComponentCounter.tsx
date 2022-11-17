import { useState } from "react"
import Counter from "./Counter"

const FunctionalComponentCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <Counter
      value={count}
      onDecrease={() => setCount((count) => count - 1)}
      onIncrease={() => setCount((count) => count + 1)}
    />
  )
}

export default FunctionalComponentCounter
