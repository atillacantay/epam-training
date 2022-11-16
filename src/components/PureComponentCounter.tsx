import React from "react"
import "../styles/counter.css"

type Props = {}

type State = {
  count: number
}

class PureComponentCounter extends React.PureComponent<Props, State> {
  state: Readonly<State> = {
    count: 0,
  }

  render() {
    return (
      <div className="counter">
        Current count: {this.state.count}
        {/* This child can be used too for reusability
        <CounterElements
          value={this.state.count}
          onDecrease={() => this.setState({ count: this.state.count - 1 })}
          onIncrease={() => this.setState({ count: this.state.count + 1 })}
        /> */}
        <div className="action-buttons">
          <button
            value={this.state.count}
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>
          <button
            value={this.state.count}
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
        </div>
      </div>
    )
  }
}

export default PureComponentCounter
