import React from "react"
import "../styles/counter.css"

type Props = {}

type State = {
  count: number
}

class DefaultComponentCounter extends React.Component<Props, State> {
  state: Readonly<State> = {
    count: 0,
  }

  render() {
    return (
      <div className="counter">
        Current count: {this.state.count}
        {/* This child can be used too for reusability
        <Counter
          value={this.state.count}
          onDecrease={() => this.setState({ count: this.state.count - 1 })}
          onIncrease={() => this.setState({ count: this.state.count + 1 })}
        /> */}
        <div className="action-buttons">
          <button
            value={this.state.count}
            onClick={() =>
              this.setState((state) => ({
                count: state.count - 1,
              }))
            }
          >
            -
          </button>
          <button
            value={this.state.count}
            onClick={() =>
              this.setState((state) => ({
                count: state.count + 1,
              }))
            }
          >
            +
          </button>
        </div>
      </div>
    )
  }
}

export default DefaultComponentCounter
