import "../styles/counter.css"

interface CounterProps {
  value: number | string
  onDecrease: () => void
  onIncrease: () => void
}

const Counter = ({ value, onDecrease, onIncrease }: CounterProps) => {
  return (
    <div className="counter">
      <span>Current count: {value}</span>
      <div className="action-buttons">
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  )
}

export default Counter
