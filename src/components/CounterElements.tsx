import "../styles/counter.css"

interface CounterElementsProps {
  value: number | string
  onDecrease: () => void
  onIncrease: () => void
}

const CounterElements = ({
  value,
  onDecrease,
  onIncrease,
}: CounterElementsProps) => {
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

export default CounterElements
